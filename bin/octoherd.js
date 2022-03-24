#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import chalk from "chalk";
import getStdin from 'get-stdin';

import { octoherd } from "../index.js";
import { VERSION } from "../version.js";
import { parseInput } from "./parse-input.js";
import runCommand from "./commands/run.js";

const EPILOG = chalk.gray(`Questions? Ideas? Feedback?
https://github.com/octoherd/octoherd/discussions
  
Copyright 2020-${new Date().getFullYear()} Octoherd Contributors`);

const argv = await yargs(hideBin(process.argv))
  .command(runCommand)
  .demandCommand()
  .version(VERSION)
  .epilog(EPILOG).argv;

const stdin = await getStdin();

argv.octoherdRepos = [...argv.octoherdRepos || [], ...parseInput(stdin)];

try {
  await octoherd(argv);
} catch (error) {
  console.error(error);
  process.exit(1);
}
