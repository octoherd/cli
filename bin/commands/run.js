import { resolve } from "path";

import chalk from "chalk";
import { VERSION as OctokitVersion } from "@octoherd/octokit";

import { VERSION } from "../../version.js";
import { cliOptions } from "../cli-options.js";

const VERSIONS = `
@octoherd/cli:     v${VERSION}
@octoherd/octokit: v${OctokitVersion}
Node.js:           ${process.version}, ${process.platform} ${process.arch}`.trim();

/** @type import('yargs').CommandModule */
const runCommand = {
  command: "run",
  describe: "",
  builder: (yargs) =>
    yargs
      .usage("Usage: $0 run [options]")
      .example("$0 run -T $TOKEN -S path/to/script.js -R octoherd/cli", "")
      .options(cliOptions)
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
  handler: (args) => {
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
