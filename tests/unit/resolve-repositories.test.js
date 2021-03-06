import { resolveRepositories } from '../../lib/resolve-repositories.js';
import { Octokit } from "@octoherd/octokit";
import nock from "nock";
import { suite } from "uvu";
import { equal } from "uvu/assert";

const resolveRepos = suite('resolve-repositories')
const withOrg = suite('when GitHub account is an Organization: "@octoherd"')
const withUser = suite('when GitHub account is a User: "@gr2m"')

withOrg('when single repository exists', async () => {
	const org = 'octoherd';
	const repo = 'cli';
	const octokit = new Octokit({
		auth: 'randomToken',
	});
	
	const repositories = [
		`${org}/${repo}`
	]

	const mockedResponse = { name: repo }
	
	nock('https://api.github.com')
		.get(`/repos/${org}/${repo}`)
		.reply(200, mockedResponse)
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	equal(resolvedRepos, [mockedResponse])
})

withOrg('when requesting all the repositories', async () => {
	const org = 'octoherd';
	const repo = '*';
	const octokit = new Octokit({ auth: 'randomToken' });
	
	const repositories = [`${org}/${repo}`]

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
		{ name: "create-octoherd-script }" }
	]

	nock('https://api.github.com')
		.head(`/orgs/${org}`)
		.reply(200)
		.get(`/orgs/${org}/repos`)
		.query({ per_page: 100 })
		.reply(200, mockedResponse)
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	equal(resolvedRepos, mockedResponse)
})

withOrg('when requesting all the repositories under a pattern', async () => {
	const org = 'octoherd';
	const repo = 'script-*';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	
	const repositories = [
		`${org}/${repo}`
	]

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
		{ name: "script-hello-world" }
	]

	const nonScriptRepos = [
		{ name: "cli" },
		{ name: "octoherd" },
		{ name: ".github" },
		{ name: "octokit" },
		{ name: "create-octoherd-script }" }
	]

	nock('https://api.github.com')
		.head(`/orgs/${org}`)
		.reply(200)
		.get(`/orgs/${org}/repos`)
		.query({ per_page: 100 })
		.reply(200, [...scriptRepos, ...nonScriptRepos])
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	equal(resolvedRepos, scriptRepos)
})

withUser('when single repository exists', async () => {
	const owner = 'gr2m';
	const repo = 'squash-commit-app';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});

	const repositories = [
		`${owner}/${repo}`
	]

	const mockedResponse = { name: repo }

	nock('https://api.github.com')
		.get(`/repos/${owner}/${repo}`)
		.reply(200, mockedResponse)

	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)
	
	equal(resolvedRepos, [mockedResponse])
})

withUser('when requesting all the repositories', async () => {
	const owner = 'octokitbot';
	const repo = '*';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	
	const repositories = [
		`${owner}/${repo}`
	]

	const mockedResponse = [
		{ name: "repo1" },
		{ name: "repo2" }
	]

	nock('https://api.github.com')
		.head(`/orgs/${owner}`)
		.reply(404)
		.get(`/users/${owner}/repos`)
		.query({ per_page: 100 })
		.reply(200, mockedResponse)
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	equal(resolvedRepos, mockedResponse)
})

resolveRepos('resolve-repositories', () => {
	withOrg.run()
	withUser.run()
})

resolveRepos.after.each(() => {
	nock.cleanAll()
})

resolveRepos.run()