import { resolveRepositories } from '../../lib/resolve-repositories';
import { Octokit } from "@octoherd/octokit";

describe('resolve-repositories', () => {
	describe('when GitHub account is an Organization: octoherd', () => {
		test('when single repository exists', async () => {
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
			
			expect(resolvedRepoNames).toEqual([repo])
		})

		test('when requesting all the repositories', async () => {
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
			
			expect(resolvedRepos.length).toBeGreaterThanOrEqual(15)
			expect(resolvedRepoNames).toContain(...[
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
			])
		})

		test('when requesting all the repositories under a pattern', async () => {
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
			
			expect(resolvedRepos.length).toBeGreaterThanOrEqual(10)
			expect(resolvedRepoNames).toEqual(expect.arrayContaining([
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
			]))
			expect(resolvedRepoNames).not.toContain("create-octoherd-script")
			expect(resolvedRepoNames).not.toContain("cli")
		})
	})

	describe('when GitHub account is a User: gr2m', () => {
		test('when single repository exists', async () => {
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
			
			expect(resolvedRepoNames).toEqual([repo])
		})

		test('when requesting all the repositories', async () => {
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
			
			expect(resolvedRepos.length).toBeGreaterThanOrEqual(1)
			expect(resolvedRepoNames).toContain("sandbox")
		})
	})
})