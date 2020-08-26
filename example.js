module.exports = exampleScript;

/**
 * Example script that stars or unstars the passed repository based on the `--unstar` CLI option
 *
 * @param {import('@octokit/core').Octokit} octokit
 * @param {object} repository Repository object as returned by the GitHub API, see https://docs.github.com/en/rest/reference/repos#get-a-repository
 * @param {object} options Custom user options passed to the CLI
 */
async function exampleScript(octokit, repository, options) {
  const method = options.unstar ? "DELETE" : "PUT";

  // https://docs.github.com/en/rest/reference/activity#star-a-repository-for-the-authenticated-user
  // https://docs.github.com/en/rest/reference/activity#unstar-a-repository-for-the-authenticated-user
  await octokit.request("/user/starred/{owner}/{repo}", {
    method,
    owner: repository.owner.login,
    repo: repository.name,
  });
}
