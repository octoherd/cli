#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { resolve } from "path";
import { VERSION as OctokitVersion } from "@octoherd/octokit";
import chalk from "chalk";

import { octoherd } from "../index.js";
import { VERSION } from "../version.js";
import { cliOptions } from "./cli-options.js";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 [options] [script] [repos...]")
  .example(
    "$0 --token 0123456789012345678901234567890123456789 octokit/rest.js"
  )
  .command("$0 [script] [repos...]", "", (yargs) => {
    yargs.positional("script", {
      demandOption: true,
      describe: "Path to *.js script. Must be an ES Module.",
    });
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

const { _, $0, script, repos, ...options } = argv;

console.log(
  `\n${chalk.bold("Running @octoherd/cli v%s")} ${chalk.gray(
    "(@octoherd/octokit v%s, Node.js: %s, %s %s)"
  )}`,
  VERSION,
  OctokitVersion,
  process.version,
  process.platform,
  process.arch
);

let octoherdScript;
const path = resolve(process.cwd(), script);

console.log("Loading script at %s\n", script);

try {
  octoherdScript = (await import(path)).script;
} catch (error) {
  console.error(error.stack);
  throw new Error(`[octoherd] ${script} script could not be found`);
}

if (!octoherdScript) {
  throw new Error(`[octoherd] no "script" exported at ${path}`);
}

octoherd({ ...options, octoherdScript, octoherdRepos: repos }).catch(
  (error) => {
    console.error(error);
    process.exit(1);
  }
);
