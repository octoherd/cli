export async function resolveRepositories(state, repositories) {
  const ignoreRepositories = repositories.reduce((memo, fullName) => {
    if (fullName.startsWith("!")) {
      memo.push(fullName.slice(1));
    }
    return memo;
  }, []);

  const repositoriesWithStars = repositories.filter((fullName) => {
    return (
      /^[a-z0-9_.-]+\/(\*|[a-z0-9_.-]+\*|\*[a-z0-9_.-]+|[a-z0-9_.-]+\*[a-z0-9_.-]+)$/i.test(
        fullName
      ) && !fullName.startsWith("!")
    );
  });

  const repositoriesWithoutStars = repositories.filter((fullName) => {
    return !/\*/i.test(fullName) && !fullName.startsWith("!");
  });
  const allRepositories = !!repositories.find((name) => name === "*");

  const resolvedRepositories = [];

  for (const name of repositoriesWithoutStars) {
    const [owner, repo] = name.split("/");
    try {
      const { data } = await state.octokit.request("/repos/{owner}/{repo}", {
        owner,
        repo,
      });
      resolvedRepositories.push(data);
    } catch (error) {
      if (error.status !== 404) throw error;

      state.octokit.log.warn(`Repository ${owner}/${repo} could not be found`);
    }
    Deno.stdout.write(new TextEncoder().encode("."));
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
      : // https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user
        "GET /user/repos";

    for await (const response of state.octokit.paginate.iterator(
      paginateReposRoute,
      {
        ...(isOrg ? { owner } : { affiliation: "owner" }),
        per_page: 100,
      }
    )) {
      let selectedRepositories = response.data;

      if (repoPattern !== "*") {
        const repoRegex = new RegExp(`^${repoPattern.replace(/\*/g, ".*")}$`);
        selectedRepositories = selectedRepositories.filter((repo) =>
          repoRegex.test(repo.name)
        );
      }

      resolvedRepositories.push(...selectedRepositories);
      Deno.stdout.write(new TextEncoder().encode("."));
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
      Deno.stdout.write(new TextEncoder().encode("."));
    }
  }

  Deno.stdout.write(new TextEncoder().encode("\n"));

  function includesRepository(list, repo) {
    return list.some((x) => x.toLowerCase() === repo.full_name.toLowerCase());
  }

  // return array with unique repositories based by id (https://stackoverflow.com/a/56757215)
  return resolvedRepositories
    .filter(
      (repo, index, repoList) =>
        repoList.findIndex((v2) => v2.id === repo.id) === index
    )
    .filter((repo) => !includesRepository(ignoreRepositories, repo));
}
