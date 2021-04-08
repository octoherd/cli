import { appendFileSync } from "fs";

import { Octokit } from "@octoherd/octokit";
import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";
import chalk from "chalk";
import tempy from "tempy";
import clipboardy from "clipboardy";
import enquirer from "enquirer";

import { cache as octokitCachePlugin } from "./lib/octokit-plugin-cache.js";
import { requestLog } from "./lib/octokit-plugin-request-log.js";
import { requestConfirm } from "./lib/octokit-plugin-request-confirm.js";
import { runScriptAgainstRepositories } from "./lib/run-script-against-repositories.js";
import { VERSION } from "./version.js";

const levelColor = {
  debug: chalk.bgGray.black,
  info: chalk.bgGreen.black,
  warn: chalk.bgYellow.black,
  error: chalk.bgRed.white.bold,
};

/**
 * Find all releases in a GitHub repository or organization after a specified date
 *
 * @param {object} options
 * @param {function} options.octoherdScript Path to script to run against a repository
 * @param {string[]} options.octoherdRepos Cache responses for debugging
 * @param {string} options.octoherdToken Personal Access Token: Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.
 * @param {boolean} options.octoherdCache Array of repository names in the form of "repo-owner/repo-name". To match all repositories for an owner, pass "repo-owner/*"
 */
export async function octoherd(options) {
  const {
    octoherdToken,
    octoherdCache = false,
    octoherdDebug,
    octoherdScript,
    octoherdRepos = [],
    octoherdBypassConfirms,
    ...userOptions
  } = options;

  const tmpLogFile = tempy.file({ extension: "ndjson.log" });

  const plugins = [requestLog, requestConfirm];
  if (typeof octoherdCache === "string") plugins.push(octokitCachePlugin);
  const CliOctokit = Octokit.plugin(...plugins);

  const authOptions = octoherdToken
    ? { auth: octoherdToken }
    : {
        authStrategy: createOAuthDeviceAuth,
        auth: {
          // Octoherd's OAuth App
          clientId: "e93735961b3b72ca5c02",
          clientType: "oauth-app",
          scopes: ["repo"],
          async onVerification({ verification_uri, user_code }) {
            console.log("Open %s", verification_uri);

            await clipboardy.write(user_code);
            console.log("Paste code: %s (copied to your clipboard)", user_code);

            console.log(
              `\n${chalk.gray(
                "To avoid this prompt, pass a token with --octoherd-token or -T"
              )}\n`
            );

            const prompt = new enquirer.Input({
              message: "Press <enter> when ready",
            });

            await prompt.run();
          },
        },
      };

  const octokit = new CliOctokit({
    ...authOptions,
    userAgent: ["octoherd-cli", VERSION].join("/"),
    octoherd: {
      debug: octoherdDebug,
      cache: octoherdCache,
      bypassConfirms: octoherdBypassConfirms,
      onLogMessage(level, message, additionalData) {
        // ignore the `octoherd` property in meta data
        const { octoherd, ...meta } = additionalData;
        let additionalDataString = JSON.stringify(meta);

        if (additionalDataString.length > 300) {
          additionalDataString = additionalDataString.slice(0, 295) + " … }";
        }

        console.log(
          levelColor[level](" " + level.toUpperCase() + " "),
          Object.keys(meta).length
            ? `${message} ${chalk.gray(additionalDataString)}`
            : message
        );
      },
      onLogData(data) {
        appendFileSync(tmpLogFile, JSON.stringify(data) + "\n");
      },
    },
  });

  // trigger OAuth Device Flow before loading repositories
  // It's not necessary, but a better UX
  await octokit.auth({ type: "oauth-user" });

  const state = {
    log: console,
    octokit,
    script: octoherdScript,
    userOptions,
  };

  if (octoherdRepos.length === 0) {
    throw new Error("[octoherd] No repositories provided");
  }

  await runScriptAgainstRepositories(state, octoherdRepos);

  console.log("");
  console.log(chalk.gray("-".repeat(80)));
  console.log("");
  console.log(`Log file written to ${tmpLogFile}`);

  if ("octoherdCache" in options) {
    console.log(
      "Request cache written to %s",
      options.octoherdCache || "./cache"
    );
  }
}
