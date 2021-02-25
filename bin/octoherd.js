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
      describe: "Path to your *.js script",
    });
    yargs.positional("repos", {
      demandOption: true,
      describe: "One or multiple arrays in the form of 'repo-owner/repo-name'",
      default: [],
    });
  })
  .option("token", {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.',
    demandOption: true,
    type: "string",
  })
  .option("cache", {
    description: "Cache responses for debugging",
    type: "boolean",
    default: false,
  })
  .epilog("copyright 2020").argv;

const { _, $0, ...options } = argv;
octoherd(options).catch((error) => {
  console.error(error);
  process.exit(1);
});
