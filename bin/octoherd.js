#!/usr/bin/env node

import yargs from "yargs";

import { octoherd } from "../index.js";

const argv = yargs
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
  .option("octoherd-token", {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.',
    demandOption: true,
    type: "string",
  })
  .option("octoherd-cache", {
    description: "Cache responses for debugging",
    type: "boolean",
    default: false,
  })
  .option("octoherd-debug", {
    description: "Show debug logs",
    type: "boolean",
    default: false,
  })
  .epilog("copyright 2020").argv;

const { _, $0, script, repos, ...options } = argv;

octoherd({ ...options, octoherdScript: script, octoherdRepos: repos }).catch(
  (error) => {
    console.error(error);
    process.exit(1);
  }
);
