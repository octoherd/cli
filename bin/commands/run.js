import { resolve } from "path";

import chalk from "chalk";
import { VERSION as OctokitVersion } from "@octoherd/octokit";

import { VERSION } from "../../version.js";

const VERSIONS = `
@octoherd/cli:     v${VERSION}
@octoherd/octokit: v${OctokitVersion}
Node.js:           ${process.version}, ${process.platform} ${process.arch}`.trim();

/** @type { {[key: string]: import("yargs").Options} } */
const options = {
  "octoherd-token": {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.',
    type: "string",
    alias: "T",
  },
  "octoherd-script": {
    description: "Path to *.js script. Must be an ES Module.",
    demandOption: true,
    type: "string",
    alias: "S",
  },
  "octoherd-repos": {
    description:
      "One or multiple repositories in the form of 'repo-owner/repo-name'. 'repo-owner/*' will find all repositories for one owner. '*' will find all repositories the user has access to",
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
};

/** @type import('yargs').CommandModule */
const runCommand = {
  command: "run",
  describe: "",
  builder: (yargs) =>
    yargs
      .usage("Usage: $0 run [options]")
      .example("$0 run -T $TOKEN -S path/to/script.js -R octoherd/cli", "")
      .options(options)
      .version(VERSIONS)
      .coerce("octoherd-script", async (script) => {
        if (!script) return;

        if (typeof script === "function") return script;

        let scriptModule;
        const path = resolve(process.cwd(), script);

        try {
          scriptModule = await import(path);
        } catch (error) {
          throw new Error(
            `[octoherd] ${path} does not exist or is not an ES Module`
          );
        }

        if (!scriptModule.script) {
          throw new Error(`[octoherd] no "script" exported at ${path}`);
        }

        return scriptModule.script;
      }),
  handler: () => {
    console.log(
      `\n${chalk.bold("Running @octoherd/cli v%s")} ${chalk.gray(
        "(@octoherd/octokit v%s, Node.js: %s, %s %s)"
      )}\n`,
      VERSION,
      OctokitVersion,
      process.version,
      process.platform,
      process.arch
    );
  },
};

export default runCommand;
