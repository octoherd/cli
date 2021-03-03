import yargs from "yargs";
import { VERSION as OctokitVersion } from "@octoherd/octokit";
import chalk from "chalk";

import { octoherd } from "../index.js";
import { VERSION } from "../version.js";
import { cliOptions } from "./cli-options.js";

/**
 * Function is used by Octoherd Script modules to provide a dedicated CLI binary
 *
 *     import { script } from "./script.js";
 *     import { run } from "@octoherd/cli/run";
 *     run(script);
 *
 * @param {function} script Octoherd Script function
 */
export function run(script) {
  const argv = yargs
    .usage("Usage: $0 [options] [repos...]")
    .example(
      "$0 --token 0123456789012345678901234567890123456789 octokit/rest.js"
    )
    .command("$0 [repos...]", "", (yargs) => {
      yargs.positional("repos", {
        demandOption: true,
        describe:
          "One or multiple arrays in the form of 'repo-owner/repo-name'. 'repo-owner/*' will find all repositories for one owner. '*' will find all repositories the user has access to",
        default: [],
      });
    })
    .options(cliOptions)
    .version(VERSION)
    .epilog(`copyright 2020-${new Date().getFullYear()}`).argv;

  const { _, $0, repos, ...options } = argv;

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

  octoherd({ ...options, octoherdScript: script, octoherdRepos: repos }).catch(
    (error) => {
      console.error(error);
      process.exit(1);
    }
  );
}
