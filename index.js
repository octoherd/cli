module.exports = mutateGithubRepositories;

const { resolve } = require("path");

const { Octokit: OctokitCore } = require("@octokit/core");
const { paginateRest } = require("@octokit/plugin-paginate-rest");
const { throttling } = require("@octokit/plugin-throttling");
const { retry } = require("@octokit/plugin-retry");

const { cache: octokitCachePlugin } = require("./lib/octokit-plugin-cache");
const { resolveRepositories } = require("./lib/resolve-repositories");
const { name, version } = require("./package.json");

const Octokit = OctokitCore.plugin(paginateRest, throttling, retry).defaults({
  log: console,
  userAgent: [name, version].join("/"),
  throttle: {
    onAbuseLimit: (error, options) => {
      octokit.log.error("onAbuseLimit", error, options);
    },
    onRateLimit: (error, options) => {
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
async function mutateGithubRepositories(
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
  try {
    userScript = require(resolve(process.cwd(), script));
  } catch (error) {
    throw new Error(
      `[mutate-github-repositories] ${script} script could not be found`
    );
  }

  if (repos.length === 0) {
    throw new Error("[mutate-github-repositories] No repositories provided");
  }

  state = {
    log: console,
    octokit,
  };

  const repositories = await resolveRepositories(state, repos);

  for (const repository of repositories) {
    console.log("Running %s on %s...", script, repository.full_name);
    await userScript(octokit, repository, userOptions);
  }

  console.log("\ndone.");
}
