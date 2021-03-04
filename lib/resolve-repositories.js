export async function resolveRepositories(state, repositories) {
  const invalidRepositories = repositories.filter((fullName) => {
    /^[a-z0-9_.-]+\/([a-z0-9_.-]+|\*)$/i.test(fullName);
  });

  if (invalidRepositories.length) {
    throw new Error("[octoherd] Invalid repositories: %o", invalidRepositories);
  }

  const repositoriesWithStars = repositories.filter((fullName) => {
    return /^[a-z0-9_.-]+\/\*$/i.test(fullName);
  });

  const repositoriesWithoutStars = repositories.filter((fullName) => {
    return !/\*/i.test(fullName);
  });
  const allRepositories = !!repositories.find((name) => name === "*");

  const resolvedRepositories = [];

  for (const name of repositoriesWithoutStars) {
    const [owner, repo] = name.split("/");
    const { data } = await state.octokit.request("/repos/{owner}/{repo}", {
      owner,
      repo,
    });
    resolvedRepositories.push(data);
    process.stdout.write(".");
  }

  for (const name of repositoriesWithStars) {
    const [owner, repoPattern] = name.split("/");
    const isOrg = await state.octokit
      .request("HEAD /orgs/:org", {
        org: owner,
      })
      .then(
        () => true,
        () => false
      );
    const paginateReposRoute = isOrg
      ? // https://docs.github.com/en/rest/reference/repos#list-organization-repositories
        "GET /orgs/{owner}/repos"
      : // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
        "GET /users/{owner}/repos";

    for await (const response of state.octokit.paginate.iterator(
      paginateReposRoute,
      {
        owner,
        per_page: 100,
      }
    )) {
      let selectedRepositories = response.data;

      if (repoPattern !== '*') {
        const repoRegex = new RegExp(`/${repoPattern}/`)
        selectedRepositories = selectedRepositories.filter(repo => repoRegex.test(repo.name))
      }

      resolvedRepositories.push(...selectedRepositories);
      process.stdout.write(".");
    }
  }

  if (allRepositories) {
    for await (const response of state.octokit.paginate.iterator(
      "GET /user/repos",
      {
        per_page: 100,
      }
    )) {
      resolvedRepositories.push(...response.data);
      process.stdout.write(".");
    }
  }

  process.stdout.write("\n");

  // return unique array (https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/)
  return [...new Set(resolvedRepositories)];
}
