export async function runScriptAgainstRepositories(octokit, repositories, script, options) {
  const results = {};

  for (const repository of repositories) {
    octokit.log.info(
      { octoherd: true },
      "Running on %s ...",
      repository.full_name
    );

    try {
      if (octokit.log.setContext) {
        const {id, owner, name} = repository;
        octokit.log.setContext({repository: {id, owner, name}});
      }

      const scriptResult = await script(octokit, repository, options);

      results[repository.full_name] = scriptResult;
    } catch (error) {
      if (!error.cancel) throw error;
      octokit.log.debug(error.message);
    }
  }

  return results;
}
