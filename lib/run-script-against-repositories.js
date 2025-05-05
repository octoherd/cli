export async function runScriptAgainstRepositories(octokit, repositories, script, options) {
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

      script(octokit, repository, options);
    } catch (error) {
      if (!error.cancel) throw error;
      octokit.log.debug(error.message);
    }
  }
}
