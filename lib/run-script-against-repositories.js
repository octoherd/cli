import { resolveRepositories } from "./resolve-repositories.js";

export async function runScriptAgainstRepositories(state, octoherdRepos) {
  try {
    state.octokit.log.info("Loading repositories ...");
    const repositories = await resolveRepositories(state, octoherdRepos);

    for (const repository of repositories) {
      state.octokit.log.info(
        { octoherd: true },
        "Running on %s ...",
        repository.full_name
      );

      try {
        const { id, owner, name } = repository;
        state.octokit.log.setContext({ repository: { id, owner, name } });
        await state.script(state.octokit, repository, state.userOptions);
      } catch (error) {
        if (!error.cancel) throw error;
        state.octokit.log.debug(error.message);
      }
    }
  } catch (error) {
    state.octokit.log.error(error);
    process.exitCode = 1;
  }
}
