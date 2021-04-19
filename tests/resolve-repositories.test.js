import { resolveRepositories } from "../lib/resolve-repositories.js";
import { Octokit } from "@octoherd/octokit";
import { suite } from "uvu";
import { equal } from "uvu/assert";
import simple from "simple-mock";

const resolveRepos = suite("resolve-repositories");
const withOrg = suite('when GitHub account is an Organization: "@octoherd"');
const withUser = suite('when GitHub account is a User: "@gr2m"');

withOrg("when single repository exists", async () => {
  const org = "octoherd";
  const repo = "cli";
  const octokit = new Octokit({
    auth: "randomToken",
  });

  const mockedResponse = { name: repo };
  const repositories = [`${org}/${repo}`];

  simple.mock(octokit, "request").resolveWith({ data: mockedResponse });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, [mockedResponse]);
});

withOrg("when requesting all the repositories", async () => {
  const org = "octoherd";
  const repo = "*";
  const octokit = new Octokit({ auth: "randomToken" });

  const repositories = [`${org}/${repo}`];

  const mockedResponse = [
    { name: "cli" },
    { name: "octoherd" },
    { name: ".github" },
    { name: "octokit" },
    { name: "script-close-renovate-dashboard-issues" },
    { name: "script-create-repositories-from-script-folders" },
    { name: "script-find-releases" },
    { name: "script-remove-dependabot" },
    { name: "script-remove-required-ci-check" },
    { name: "script-setup-renovate" },
    { name: "script-star-or-unstar" },
    { name: "script-sync-branch-protections" },
    { name: "script-add-octoherd-cli-to-script" },
    { name: "script-hello-world" },
    { name: "create-octoherd-script }" },
  ];

  simple.mock(octokit, "request").resolveWith(undefined);

  simple.mock(octokit.paginate, "iterator").returnWith({
    async *[Symbol.asyncIterator]() {
      yield { data: mockedResponse };
    },
  });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, mockedResponse);
});

withOrg(
  "when requesting all the repositories with pattern at end",
  async () => {
    const org = "octoherd";
    const repo = "script-*";
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const repositories = [`${org}/${repo}`];

    const scriptRepos = [
      { name: "script-close-renovate-dashboard-issues" },
      { name: "script-create-repositories-from-script-folders" },
      { name: "script-find-releases" },
      { name: "script-remove-dependabot" },
      { name: "script-remove-required-ci-check" },
      { name: "script-setup-renovate" },
      { name: "script-star-or-unstar" },
      { name: "script-sync-branch-protections" },
      { name: "script-add-octoherd-cli-to-script" },
      { name: "script-hello-world" },
    ];

    const nonScriptRepos = [
      { name: "cli" },
      { name: "octoherd" },
      { name: ".github" },
      { name: "octokit" },
      { name: "create-octoherd-script }" },
    ];

    simple.mock(octokit, "request").resolveWith(undefined);

    simple.mock(octokit.paginate, "iterator").returnWith({
      async *[Symbol.asyncIterator]() {
        yield { data: [...scriptRepos, ...nonScriptRepos] };
      },
    });

    const resolvedRepos = await resolveRepositories(
      {
        log: console,
        octokit,
      },
      repositories
    );

    equal(resolvedRepos, scriptRepos);
  }
);

withOrg(
  "when requesting all the repositories with pattern at end",
  async () => {
    const org = "octoherd";
    const repo = "*-test";
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const repositories = [`${org}/${repo}`];

    const testRepos = [
      { name: "one-test" },
      { name: "two-test" },
      { name: "three-test" },
    ];

    const nonTestRepos = [{ name: "foo" }, { name: "bar" }];

    simple.mock(octokit, "request").resolveWith(undefined);

    simple.mock(octokit.paginate, "iterator").returnWith({
      async *[Symbol.asyncIterator]() {
        yield { data: [...testRepos, ...nonTestRepos] };
      },
    });

    const resolvedRepos = await resolveRepositories(
      {
        log: console,
        octokit,
      },
      repositories
    );

    equal(resolvedRepos, testRepos);
  }
);
withOrg(
  "when requesting all the repositories with pattern in the middle",
  async () => {
    const org = "octoherd";
    const repo = "middle-*-test";
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const repositories = [`${org}/${repo}`];

    const testRepos = [
      { name: "middle-one-test" },
      { name: "middle-two-test" },
      { name: "middle-three-test" },
    ];

    const nonTestRepos = [{ name: "foo" }, { name: "bar" }];

    simple.mock(octokit, "request").resolveWith(undefined);

    simple.mock(octokit.paginate, "iterator").returnWith({
      async *[Symbol.asyncIterator]() {
        yield { data: [...testRepos, ...nonTestRepos] };
      },
    });

    const resolvedRepos = await resolveRepositories(
      {
        log: console,
        octokit,
      },
      repositories
    );

    equal(resolvedRepos, testRepos);
  }
);

withUser("when single repository exists", async () => {
  const owner = "gr2m";
  const repo = "squash-commit-app";
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repositories = [`${owner}/${repo}`];

  const mockedResponse = { name: repo };

  simple.mock(octokit, "request").resolveWith({ data: mockedResponse });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, [mockedResponse]);
});

withUser("when requesting all the repositories", async () => {
  const owner = "octokitbot";
  const repo = "*";
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repositories = [`${owner}/${repo}`];

  const mockedResponse = [{ name: "repo1" }, { name: "repo2" }];

  simple.mock(octokit, "request").rejectWith(undefined);

  simple.mock(octokit.paginate, "iterator").returnWith({
    async *[Symbol.asyncIterator]() {
      yield { data: mockedResponse };
    },
  });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, mockedResponse);
});

resolveRepos("resolve-repositories", () => {
  withOrg.run();
  withUser.run();
});

resolveRepos.after.each(() => {
  nock.cleanAll();
});

resolveRepos.run();
