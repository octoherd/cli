module.exports = octoherd;

const { resolve } = require("path");

const { Octokit: OctokitCore } = require("@octokit/core");
const { paginateRest } = require("@octokit/plugin-paginate-rest");
const { throttling } = require("@octokit/plugin-throttling");
const { retry } = require("@octokit/plugin-retry");
const pino = require("pino");

const { cache: octokitCachePlugin } = require("./lib/octokit-plugin-cache");
const { resolveRepositories } = require("./lib/resolve-repositories");
const { name, version } = require("./package.json");

const logger = pino();
const Octokit = OctokitCore.plugin(paginateRest, throttling, retry).defaults({
  log: {
    debug: logger.debug.bind(logger),
    info: logger.info.bind(logger),
    warn: logger.warn.bind(logger),
    error: logger.error.bind(logger),
  },
  userAgent: [name, version].join("/"),
  throttle: {
    onAbuseLimit: (error, options, octokit) => {
      octokit.log.error("onAbuseLimit", error, options);
    },
    onRateLimit: (error, options, octokit) => {
      octokit.log.error("onRateLimit", error, options);
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
async function octoherd(
  options = {
    cache: false,
    repos: [],
  }
) {
  const { token, script, repos, cache, ...userOptions } = options;
  const MyOctokit = cache ? Octokit.plugin(octokitCachePlugin) : Octokit;
  const octokit = new MyOctokit({
    auth: token,
  });

  let userScript;
  const path = resolve(process.cwd(), script);
  try {
    userScript = require(path).script;
  } catch (error) {
    throw new Error(`[octoherd] ${script} script could not be found`);
  }

  if (!userScript) {
    throw new Error(`[octoherd] no "script" exported at ${path}`);
  }

  if (repos.length === 0) {
    throw new Error("[octoherd] No repositories provided");
  }

  state = {
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
