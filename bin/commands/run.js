import { resolve } from "node:path";

import chalk from "chalk";
import { VERSION as OctokitVersion } from "@octoherd/octokit";

import { VERSION } from "../../version.js";

const VERSIONS = `
@octoherd/cli:     v${VERSION}
@octoherd/octokit: v${OctokitVersion}
Deno:              ${Deno.version.deno}`.trim();

/** @type { {[key: string]: import("yargs").Options} } */
const options = {
  "octoherd-script": {
    description: "Path to *.js script. Must be an ES Module.",
    demandOption: true,
    type: "string",
    alias: "S",
  },
  "octoherd-token": {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories. Creates an OAuth token if not set.',
    type: "string",
    alias: "T",
  },
  "octoherd-repos": {
    description:
      "One or multiple repositories in the form of 'repo-owner/repo-name'. 'repo-owner/*' will find all repositories for one owner. '*' will find all repositories the user has access to. To exclude a repository use '!repo-owner/repo'. Will prompt for repositories if not set.",
    type: "string",
    array: true,
    alias: "R",
  },
  "octoherd-cache": {
    description:
      "Cache responses for debugging. Creates a ./cache folder if flag is set. Override by passing custom path",
    type: "string",
  },
  "octoherd-debug": {
    description: "Show debug logs",
    type: "boolean",
    default: false,
  },
  "octoherd-bypass-confirms": {
    description: "Bypass prompts to confirm mutating requests",
    type: "boolean",
    default: false,
  },
  "octoherd-base-url": {
    description:
      "When using with GitHub Enterprise Server, set to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is github.acme-inc.com, then set to https://github.acme-inc.com/api/v3.",
    type: "string",
  },
};

/** @type import('yargs').CommandModule */
const runCommand = {
  command: "run",
  describe: "",
  builder: (yargs) =>
    yargs
      .wrap(96)
      .usage("Usage: octoherd run -S path/to/script.js [options]")
      .example([
        ["octoherd run -S path/to/script.js", "Minimal usage example"],
        [
          "octoherd run -S path/to/script.js -T $TOKEN  -R octoherd/cli",
          "Pass token and repos as CLI flags",
        ],
        [
          "octoherd run -S path/to/script.js -T $TOKEN  -R octoherd/cli",
          "Avoid prompts for token and repos",
        ],
        [
          "octoherd run -S path/to/script.js -T $TOKEN  -R octoherd/cli --octoherd-bypass-confirms",
          "Avoid any prompts",
        ],
        [
          "octoherd run -S path/to/script.js --octoherd-base-url https://github.acme-inc.com/api/v3",
          "Run octoherd script against GHES",
        ],
      ])
      .options(options)
      .version(VERSIONS)
      .coerce("octoherd-script", async (script) => {
        if (!script) return;

        if (typeof script === "function") return script;

        let scriptModule;
        const path = resolve(Deno.cwd(), script);

        try {
          scriptModule = await import(path);
        } catch (error) {
          if (error.code === "ERR_MODULE_NOT_FOUND") {
            throw new Error(`[octoherd] ${path} does not exist`);
          }

          const err = new Error(`[octoherd] ${error}\n    at ${path}`);
          throw err;
        }

        if (!scriptModule.script) {
          throw new Error(`[octoherd] no "script" exported at ${path}`);
        }

        return scriptModule.script;
      }),
  handler: () => {
    console.log(
      `\n${chalk.bold("Running @octoherd/cli v%s")} ${chalk.gray(
        "(@octoherd/octokit v%s, Deno: %s)"
      )}\n`,
      VERSION,
      OctokitVersion,
      Deno.version.deno
    );
  },
};

export default runCommand;
