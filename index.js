import { resolve } from "path";
import { appendFileSync } from "fs";

import { Octokit } from "@octoherd/octokit";
import chalk from "chalk";

import { cache as octokitCachePlugin } from "./lib/octokit-plugin-cache.js";
import { resolveRepositories } from "./lib/resolve-repositories.js";
import { VERSION } from "./version.js";

const levelColor = {
  debug: chalk.bgGray.black,
  info: chalk.bgGreen.black,
  warn: chalk.bgYellow.black,
  error: chalk.bgRed.white.bold,
};

const OctokitWithDefaults = Octokit.defaults({
  userAgent: ["octoherd-cli", VERSION].join("/"),
  octoherd: {
    debug: true,
    onLogMessage(level, message, additionalData) {
      console.log(
        levelColor[level](" " + level.toUpperCase() + " "),
        Object.keys(additionalData).length
          ? `${message} ${chalk.gray(JSON.stringify(additionalData))}`
          : message
      );
    },
    onLogData(data) {
      appendFileSync("debug.log", JSON.stringify(data));
    },
  },
});

/**
 * Find all releases in a GitHub repository or organization after a specified date
 *
 * @param {object} options
 * @param {string} options.token Personal Access Token: Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.
 * @param {string} options.script Path to script to run against a repository
 * @param {string} options.repos Array of repository names in the form of "repo-owner/repo-name". To match all repositories for an owner, pass "repo-owner/*"
 * @param {boolean} options.cache Cache responses for debugging
 */
export async function octoherd(
  options = {
    cache: false,
    repos: [],
  }
) {
  const { token, script, repos, cache, ...userOptions } = options;
  const CliOctokit = cache
    ? OctokitWithDefaults.plugin(octokitCachePlugin)
    : OctokitWithDefaults;
  const octokit = new CliOctokit({
    auth: token,
  });

  octokit.log.debug({ check: 12 }, "debug");
  octokit.log.info({ check: 12 }, "info");
  octokit.log.warn({ check: 12 }, "warn");
  octokit.log.error({ check: 12 }, "error");

  let userScript;
  const path = resolve(process.cwd(), script);

  try {
    userScript = (await import(path)).script;
  } catch (error) {
    throw new Error(`[octoherd] ${script} script could not be found`);
  }

  if (!userScript) {
    throw new Error(`[octoherd] no "script" exported at ${path}`);
  }

  if (repos.length === 0) {
    throw new Error("[octoherd] No repositories provided");
  }

  const state = {
    log: console,
    octokit,
  };

  const repositories = await resolveRepositories(state, repos);

  for (const repository of repositories) {
    octokit.log.info("Running %s on %s...", script, repository.full_name);
    await userScript(octokit, repository, userOptions);
  }

  octokit.log.info("done");
}
