function filterCancelledRoutesFromResults(results) {
  return results.filter(Boolean);
}

export async function runScriptAgainstRepositories(octokit, repositories, script, options) {
  const results = await Promise.all(repositories.map(async repository => {
    octokit.log.info(
      {octoherd: true},
      "Running on %s ...",
      repository.full_name
    );

    try {
      if (octokit.log.setContext) {
        const {id, owner, name} = repository;
        octokit.log.setContext({repository: {id, owner, name}});
      }

      const scriptResult = await script(octokit, repository, options);

      return [repository.full_name, scriptResult];
    } catch (error) {
      if (!error.cancel) throw error;
      octokit.log.debug(error.message);
    }
  }));

  return Object.fromEntries(filterCancelledRoutesFromResults(results));
}
