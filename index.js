import { appendFileSync } from "fs";

import { Octokit } from "@octoherd/octokit";
import chalk from "chalk";
import tempy from "tempy";

import { cache as octokitCachePlugin } from "./lib/octokit-plugin-cache.js";
import { requestLog } from "./lib/octokit-plugin-request-log.js";
import { requestConfirm } from "./lib/octokit-plugin-request-confirm.js";
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
 * @param {function} options.octoherdScript Path to script to run against a repository
 * @param {string[]} options.octoherdRepos Cache responses for debugging
 * @param {string} options.octoherdToken Personal Access Token: Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.
 * @param {boolean} options.octoherdCache Array of repository names in the form of "repo-owner/repo-name". To match all repositories for an owner, pass "repo-owner/*"
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
    octoherdBypassConfirms,
    ...userOptions
  } = options;

  const tmpLogFile = tempy.file({ extension: "ndjson.log" });

  const plugins = [requestLog, requestConfirm];
  if (typeof octoherdCache === "string") plugins.push(octokitCachePlugin);
  const CliOctokit = Octokit.plugin(...plugins);

  const octokit = new CliOctokit({
    auth: octoherdToken,
    userAgent: ["octoherd-cli", VERSION].join("/"),
    octoherd: {
      debug: octoherdDebug,
      cache: octoherdCache,
      bypassConfirms: octoherdBypassConfirms,
      onLogMessage(level, message, additionalData) {
        // ignore the `octoherd` property in meta data
        const { octoherd, ...meta } = additionalData;
        let additionalDataString = JSON.stringify(meta);

        if (additionalDataString.length > 300) {
          additionalDataString = additionalDataString.slice(0, 295) + " … }";
        }

        console.log(
          levelColor[level](" " + level.toUpperCase() + " "),
          Object.keys(meta).length
            ? `${message} ${chalk.gray(additionalDataString)}`
            : message
        );
      },
      onLogData(data) {
        appendFileSync(tmpLogFile, JSON.stringify(data) + "\n");
      },
    },
  });

  if (octoherdRepos.length === 0) {
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
        { octoherd: true },
        "Running on %s ...",
        repository.full_name
      );

      try {
        await octoherdScript(octokit, repository, userOptions);
      } catch (error) {
        if (!error.cancel) throw error;
        octokit.log.debug(error.message);
      }
    }
  } catch (error) {
    octokit.log.error(error);
    process.exitCode = 1;
  }

  console.log("");
  console.log(chalk.gray("-".repeat(80)));
  console.log("");
  console.log(`Log file written to ${tmpLogFile}`);

  if ("octoherdCache" in options) {
    console.log(
      "Request cache written to %s",
      options.octoherdCache || "./cache"
    );
  }
}
