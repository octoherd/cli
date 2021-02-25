# Octoherd CLI

> CLI to run a custom script on one or multiple repositories

<a href="https://myoctocat.dev/@gr2m/octoherd/"><img alt="Octoherd Avatar" src="assets/octoherd.gif" width=300 height=300 align=left></a>

## Usage

```
$ octoherd.js [script] [repos...]

Positionals:
  script  Path to *.js script. Must be an ES Module.
  repos   One or multiple arrays in the form of 'repo-owner/repo-name'.
          'repo-owner/*' will find all repositories for one owner. '*' will find
          all repositories the user has access to                  [default: []]

Options:
  --help            Show help                                          [boolean]
  --version         Show version number                                [boolean]
  --octoherd-token  Requires the "public_repo" scope for public repositories,
                    "repo" scope for private repositories.   [string] [required]
  --octoherd-cache  Cache responses for debugging     [boolean] [default: false]
  --octoherd-debug  Show debug logs                   [boolean] [default: false]
```

The `script` must export a `script` function which takes three parameters:

```js
export async function script(octokit, repository, options) {
  // do something here
}
```

- `octokit` is an instance of [`@octoherd/octokit`](https://github.com/octoherd/octokit.js)
- `repository` is the response data of [`GET /repos/{owner}/{repo}`](https://developer.github.com/v3/repos/#get-a-repository)
- `options` are all options passed to the CLI which are not used by `octoherd`.

## Examples

See https://github.com/octoherd/scripts

## Similar projects

- [NerdWalletOSS/shepherd](https://github.com/NerdWalletOSS/shepherd) - A utility for applying code changes across many repositories.
- [FormidableLabs/multibot](https://github.com/FormidableLabs/multibot) - A friendly multi-repository robot

## License

[ISC](LICENSE.md)
