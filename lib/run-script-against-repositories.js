import enquirer from "enquirer";
import chalk from "chalk";

import { resolveRepositories } from "./resolve-repositories.js";

export async function runScriptAgainstRepositories(state, octoherdRepos = []) {
  if (!state.octoherdReposPassedAsFlag) {
    console.log("");
    const prompt = new enquirer.List({
      message: "Enter repositories",
      separator: / +/,
      hint:
        "e.g. octoherd/cli. Use a * to load all repositories for an owner, e.g. octoherd/*. Enter nothing to exit",
      validate(input) {
        const values = typeof input === "string" ? [input] : input;

        const invalid = values.find((value) => {
          if (value.trim() === "*") return;

          if (/^!?[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.*-]+$/.test(value.trim())) {
            return;
          }

          return true;
        });

        if (!invalid) return true;

        return (
          chalk.red(`"${invalid}" is not a valid repository name.`) +
          chalk.gray(" The format is <owner>/<repo>")
        );
      },
    });

    octoherdRepos = await prompt.run();

    if (!state.reposNoticeShown) {
      console.log(
        `${chalk.gray(
          "To avoid this prompt in future, pass repositories with --octoherd-repos or -R"
        )}\n`
      );
    }
    state.reposNoticeShown = true;
  }

  if (octoherdRepos.length === 0) return;

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
    Deno.exitCode = 1;
  }

  await runScriptAgainstRepositories(state);
}
