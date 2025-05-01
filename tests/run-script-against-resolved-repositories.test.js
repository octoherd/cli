import { suite } from "uvu";
import { equal } from "uvu/assert";
import simple from "simple-mock";

import { runScriptAgainstRepositories } from "../lib/run-script-against-resolved-repositories.js";

const runAgainstRepos = suite('run script against repositories');

const userOptions = {};
const octoherdCliRepository = {id: 123, owner: {login: 'octoherd'}, name: 'cli', full_name: 'octoherd/cli'};

runAgainstRepos('run the script against the provided repositories', async () => {
  const octokitInfoLogger = simple.spy(() => undefined);
  const octokit = {log: {info: octokitInfoLogger}};
  const octokitCoreRepository = {id: 456, owner: {login: 'octokit'}, name: 'core.js', full_name: 'octokit/core.js'};
  const repositories = [octoherdCliRepository, octokitCoreRepository];
  const script = simple.spy(() => undefined);

  await runScriptAgainstRepositories(octokit, repositories, script, userOptions);

  repositories.forEach((repository, index) => {
    equal(script.calls[index].args, [octokit, repository, userOptions]);
    equal(octokitInfoLogger.calls[index].args, [{octoherd: true}, "Running on %s ...", repository.full_name]);
  });
});

runAgainstRepos('set logger context when available', async () => {
  const octokitLoggerContextSetter = simple.spy(() => undefined);
  const octokit = {log: {info: () => undefined, setContext: octokitLoggerContextSetter}};
  const octokitCoreRepository = {id: 456, owner: {login: 'octokit'}, name: 'core.js', full_name: 'octokit/core.js'};
  const repositories = [octoherdCliRepository, octokitCoreRepository];
  const script = simple.spy(() => undefined);

  await runScriptAgainstRepositories(octokit, repositories, script, userOptions);

  repositories.forEach((repository, index) => equal(
    octokitLoggerContextSetter.calls[index].args,
    [{repository: {id: repository.id, owner: repository.owner, name: repository.name}}]
  ));
});

runAgainstRepos('log cancelled routes at debug level', async () => {
  const repositories = [octoherdCliRepository];
  const errorMessage = 'error message';
  const cancelledRouteError = new Error(errorMessage);
  cancelledRouteError.cancel = true;
  const octokitDebugLogger = simple.spy(() => undefined);
  const octokit = {log: {info: () => undefined, debug: octokitDebugLogger}};
  const script = simple.spy(() => undefined).throwWith(cancelledRouteError);

  await runScriptAgainstRepositories(octokit, repositories, script, userOptions);

  equal(octokitDebugLogger.calls[0].args, [errorMessage]);
});

runAgainstRepos('throw other errors', async () => {
  const repositories = [octoherdCliRepository];
  const error = new Error();
  const octokit = {log: {info: () => undefined}};
  const script = simple.spy(() => undefined).throwWith(error);

  try {
    await runScriptAgainstRepositories(octokit, repositories, script, userOptions);
  } catch (err) {
    equal(err, error);
  }
});

runAgainstRepos.run();
