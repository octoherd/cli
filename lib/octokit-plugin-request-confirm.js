import enquirer from "enquirer";
import chalk from "chalk";

import { ENDPOINTS } from "./generated/endpoints.js";

export function requestConfirm(octokit, { octoherd }) {
  const allowAll = {
    "*": false,
  };
  octokit.hook.wrap("request", async (request, options) => {
    const isMutatingRequest = ["POST", "PUT", "PATCH", "DELETE"].includes(
      options.method
    );
    const {
      method,
      url,
      headers,
      mediaType,
      request: requestOptions,
      baseUrl,
      ...parameters
    } = options;
    const route = `${method} ${url}`;

    const { name, documentationUrl } = ENDPOINTS[route] || {};

    if (baseUrl !== "https://api.github.com") return request(options);
    if (octoherd.bypassConfirms) return request(options);
    if (!isMutatingRequest) return request(options);
    if (allowAll["*"]) return request(options);
    if (allowAll[route]) return request(options);

    const parameterPadding =
      Math.max(5, ...Object.keys(parameters).map((p) => p.length)) + 1;

    const choices = [
      "yes",
      "no",
      { name: "yes_endpoint", message: `yes, for all "${route}" requests` },
      { name: "yes_all", message: "yes, for all requests" },
    ];
    const prompt = new enquirer.Select({
      name: "allow",
      message:
        `Do you want to allow the following request:

  ${name ? chalk.bold(name) : chalk.yellow("<unknown endpoint>")}
  ${"route:".padEnd(parameterPadding)} ${route}
${Object.entries(parameters)
  .map(([key, value]) => `  ${(key + ":").padEnd(parameterPadding)} ${value}`)
  .join("\n")}

  ${documentationUrl || ""}`.trim() + "\n",
      choices,
    });
    const allow = await prompt.run();

    if (allow === "no") {
      const error = new Error(`"${route}" canceled`);
      error.cancel = true;
      throw error;
    }

    if (allow === "yes_all") {
      allowAll["*"] = true;
    }

    if (allow === "yes_endpoint") {
      allowAll[route] = true;
    }

    return request(options);
  });
}
