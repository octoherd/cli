import { resolve } from "path";
import { appendFileSync } from "fs";

import { Octokit } from "@octoherd/octokit";
import chalk from "chalk";
import tempy from "tempy";

import { cache as octokitCachePlugin } from "./lib/octokit-plugin-cache.js";
import { resolveRepositories } from "./lib/resolve-repositories.js";
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
 * @param {string} options.octoherdToken Personal Access Token: Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.
 * @param {string} options.octoherdScript Path to script to run against a repository
 * @param {string} options.octoherdCache Array of repository names in the form of "repo-owner/repo-name". To match all repositories for an owner, pass "repo-owner/*"
 * @param {boolean} options.octoherdRepos Cache responses for debugging
 */
export async function octoherd(
  options = {
    octoherdCache: false,
    octoherdRepos: [],
  }
) {
  const {
    octoherdToken,
    octoherdCache,
    octoherdDebug,
    octoherdScript,
    octoherdRepos,
    ...userOptions
  } = options;
  const tmpLogFile = tempy.file({ extension: "ndjson.log" });

  const CliOctokit = octoherdCache
    ? Octokit.plugin(octokitCachePlugin)
    : Octokit;
  const octokit = new CliOctokit({
    auth: octoherdToken,
    userAgent: ["octoherd-cli", VERSION].join("/"),
    octoherd: {
      debug: octoherdDebug,
      onLogMessage(level, message, additionalData) {
        console.log(
          levelColor[level](" " + level.toUpperCase() + " "),
          Object.keys(additionalData).length
            ? `${message} ${chalk.gray(JSON.stringify(additionalData))}`
            : message
        );
      },
      onLogData(data) {
        appendFileSync(tmpLogFile, JSON.stringify(data) + "\n");
      },
    },
  });

  let userScript;
  const path = resolve(process.cwd(), octoherdScript);

  octokit.log.info("Loading script at %s", octoherdScript);

  try {
    userScript = (await import(path)).script;
  } catch (error) {
    throw new Error(`[octoherd] ${octoherdScript} script could not be found`);
  }

  if (!userScript) {
    throw new Error(`[octoherd] no "script" exported at ${path}`);
  }

  if (octoherdCache.length === 0) {
    throw new Error("[octoherd] No repositories provided");
  }

  const state = {
    log: console,
    octokit,
  };

  try {
    octokit.log.info("Loading repositories ...");
    const repositories = await resolveRepositories(state, octoherdRepos);

    for (const repository of repositories) {
      octokit.log.info(
        "Running %s on %s...",
        octoherdScript,
        repository.full_name
      );
      await userScript(octokit, repository, userOptions);
    }

    console.log("");
    console.log(levelColor.info(" DONE "), `Log file written to ${tmpLogFile}`);
  } catch (error) {
    octokit.log.error(error);
    console.log("");
    console.log(
      levelColor.error(" DONE "),
      `Log file written to ${tmpLogFile}`
    );
    process.exit(1);
  }
}
