import yargs from "https://deno.land/x/yargs@v17.7.2-deno/deno.ts";
import chalk from "chalk";

import { octoherd } from "../index.js";
import { VERSION } from "../version.js";
import runCommand from "./commands/run.js";

const EPILOG = chalk.gray(`Questions? Ideas? Feedback?
https://github.com/octoherd/octoherd/discussions

Copyright 2020-${new Date().getFullYear()} Octoherd Contributors`);

const { argv } = yargs(Deno.args)
  .command(runCommand)
  .demandCommand()
  .version(VERSION)
  .epilog(EPILOG);

try {
  octoherd(argv);
} catch (error) {
  console.error({ error });
  Deno.exit(1);
}
