import { resolveRepositories } from '../../lib/resolve-repositories.js';
import { Octokit } from "@octoherd/octokit";
import { suite } from 'uvu';
import { equal, is, ok, not } from 'uvu/assert';

const resolveRepos = suite('resolve-repositories')
const withOrg = suite('when GitHub account is an Organization: "@octoherd"')
const withUser = suite('when GitHub account is a User: "@gr2m"')

withOrg('when single repository exists', async () => {
	const owner = 'octoherd';
	const repo = 'cli';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	
	const repositories = [
		`${owner}/${repo}`
	]
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	const resolvedRepoNames = resolvedRepos.map(repo => repo.name)
	
	equal(resolvedRepoNames, [repo])
})

withOrg('when requesting all the repositories', async () => {
	const owner = 'octoherd';
	const repo = '*';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	
	const repositories = [
		`${owner}/${repo}`
	]
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	const resolvedRepoNames = resolvedRepos.map(repo => repo.name)
	
	ok(resolvedRepos.length >= 15)
	ok([
		"cli",
		"octoherd",
		".github",
		"octokit",
		"script-close-renovate-dashboard-issues",
		"script-create-repositories-from-script-folders",
		"script-find-releases",
		"script-remove-dependabot",
		"script-remove-required-ci-check",
		"script-setup-renovate",
		"script-star-or-unstar",
		"script-sync-branch-protections",
		"script-add-octoherd-cli-to-script",
		"script-hello-world",
		"create-octoherd-script"
	].every(expectedRepo => resolvedRepoNames.includes(expectedRepo)))
})

withOrg('when requesting all the repositories under a pattern', async () => {
	const owner = 'octoherd';
	const repo = 'script-*';
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	
	const repositories = [
		`${owner}/${repo}`
	]
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	const resolvedRepoNames = resolvedRepos.map(repo => repo.name)

	ok(resolvedRepos.length >= 10)
	is([
		"script-close-renovate-dashboard-issues",
		"script-create-repositories-from-script-folders",
		"script-find-releases",
		"script-remove-dependabot",
		"script-remove-required-ci-check",
		"script-setup-renovate",
		"script-star-or-unstar",
		"script-sync-branch-protections",
		"script-add-octoherd-cli-to-script",
		"script-hello-world"
	].every(expectedRepo => resolvedRepoNames.includes(expectedRepo)), true)
	not(resolvedRepoNames.includes("create-octoherd-script"))
	not(resolvedRepoNames.includes("cli"))
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

	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)
	
	const resolvedRepoNames = resolvedRepos.map(repo => repo.name)
	
	equal(resolvedRepoNames, [repo])
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
	
	const resolvedRepos = await resolveRepositories({
		log: console,
		octokit,
	}, repositories)

	const resolvedRepoNames = resolvedRepos.map(repo => repo.name)
	
	ok(resolvedRepos.length >= 1)
	ok(resolvedRepoNames.includes("sandbox"))
})

resolveRepos('resolve-repositories', () => {
	withOrg.run()
	withUser.run()
})

resolveRepos.run()