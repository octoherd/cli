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

  const mockedResponse = { id: 1, name: repo };
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

withOrg("when requesting the same repository twice", async () => {
  const org = "octoherd";
  const repo = "cli";
  const octokit = new Octokit({
    auth: "randomToken",
  });

  const mockedResponse = { id: 1, name: repo };
  const repositories = [`${org}/${repo}`, `${org}/${repo}`];

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

withOrg("when requesting all repositories where one repository is ignored", async () => {
  const octokit = new Octokit({ auth: "randomToken" });

  const repositories = ['octoherd/*', '!octoherd/cli'];

  const mockedResponse = [
    { id: 1, name: "cli", full_name: 'octoherd/cli' },
    { id: 2, name: "octokit", full_name: 'octoherd/octokit' },
    { id: 3, name: "octoherd", full_name: 'octoherd/octoherd' },
  ];

  simple.mock(octokit, "request").resolveWith({ data: undefined });

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

  equal(resolvedRepos, [
    { id: 2, name: "octokit", full_name: 'octoherd/octokit' },
    { id: 3, name: "octoherd", full_name: 'octoherd/octoherd' },
  ]);
});

withOrg("when one of the requested repositories is ignored", async () => {
  const octokit = new Octokit({ auth: "randomToken" });

  const repositories = ['!octoherd/cli', 'octoherd/octokit'];

  const mockedResponse = [
    { id: 1, name: "cli", full_name: 'octoherd/cli' },
    { id: 2, name: "octokit", full_name: 'octoherd/octokit' },
  ];

  simple.mock(octokit, "request").resolveWith({ data: mockedResponse[0] });
  simple.mock(octokit, "request").resolveWith({ data: mockedResponse[1] });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, [
    { id: 2, name: "octokit", full_name: 'octoherd/octokit' },
  ]);
});

withOrg("when requested repository is ignored", async () => {
  const org = "octoherd";
  const repo = "cli";
  const octokit = new Octokit({
    auth: "randomToken",
  });

  const mockedResponse = { id: 1, name: repo };
  const repositories = [`!${org}/${repo.toUpperCase()}`];

  simple.mock(octokit, "request").resolveWith({ data: mockedResponse });

  const resolvedRepos = await resolveRepositories(
    {
      log: console,
      octokit,
    },
    repositories
  );

  equal(resolvedRepos, []);
});

withOrg("when requesting all the repositories", async () => {
  const org = "octoherd";
  const repo = "*";
  const octokit = new Octokit({ auth: "randomToken" });

  const repositories = [`${org}/${repo}`];

  const mockedResponse = [
    { id: 1, name: "cli" },
    { id: 2, name: "octoherd" },
    { id: 3, name: ".github" },
    { id: 4, name: "octokit" },
    { id: 5, name: "script-close-renovate-dashboard-issues" },
    { id: 6, name: "script-create-repositories-from-script-folders" },
    { id: 7, name: "script-find-releases" },
    { id: 8, name: "script-remove-dependabot" },
    { id: 9, name: "script-remove-required-ci-check" },
    { id: 10, name: "script-setup-renovate" },
    { id: 11, name: "script-star-or-unstar" },
    { id: 12, name: "script-sync-branch-protections" },
    { id: 13, name: "script-add-octoherd-cli-to-script" },
    { id: 14, name: "script-hello-world" },
    { id: 15, name: "create-octoherd-script }" },
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
      { id: 1, name: "script-close-renovate-dashboard-issues" },
      { id: 2, name: "script-create-repositories-from-script-folders" },
      { id: 3, name: "script-find-releases" },
      { id: 4, name: "script-remove-dependabot" },
      { id: 5, name: "script-remove-required-ci-check" },
      { id: 6, name: "script-setup-renovate" },
      { id: 7, name: "script-star-or-unstar" },
      { id: 8, name: "script-sync-branch-protections" },
      { id: 9, name: "script-add-octoherd-cli-to-script" },
      { id: 10, name: "script-hello-world" },
    ];

    const nonScriptRepos = [
      { id: 11, name: "cli" },
      { id: 12, name: "octoherd" },
      { id: 13, name: ".github" },
      { id: 14, name: "octokit" },
      { id: 15, name: "create-octoherd-script }" },
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
      { id: 1, name: "one-test" },
      { id: 2, name: "two-test" },
      { id: 3, name: "three-test" },
    ];

    const nonTestRepos = [{ id: 4, name: "foo" }, { id: 5, name: "bar" }];

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
      { id: 1, name: "middle-one-test" },
      { id: 2, name: "middle-two-test" },
      { id: 3, name: "middle-three-test" },
    ];

    const nonTestRepos = [{ id: 4, name: "foo" }, { id: 5, name: "bar" }];

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

withUser("when requesting the same repository twice", async () => {
  const owner = "gr2m";
  const repo = "squash-commit-app";
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repositories = [`${owner}/${repo}`, `${owner}/${repo}`];

  const mockedResponse = { id: 1, name: repo };

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

  const mockedResponse = [{ id: 1, name: "repo1" }, { id: 2, name: "repo2" }];

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
