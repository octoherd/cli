# mutate-github-repositories-cli

> CLI to run a custom script on one or multiple repositories

## Usage

```
$ mutate-github-repositories [script] [repos...]

Positionals:
  script  Path to your *.js script
  repos   One or multiple arrays in the form of 'repo-owner/repo-name'
                                                                   [default: []]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --token    Requires the "public_repo" scope for public repositories, "repo"
             scope for private repositories.                 [string] [required]
  --cache    Cache responses for debugging            [boolean] [default: false]
```

The `script` must export a default function which takes three parameters:

```js
module.exports = exampleScript;

module.exports = async function myScript(octokit, repository, options) {
  // do something here
};
```

- `octokit` is an instance of [`@octokit/core`](https://github.com/octokit/core.js) with the [`@octokit/plugin-paginate-rest` plugin](https://github.com/octokit/plugin-paginate-rest.js)
- `repository` is the response data of [`GET /repos/{owner}/{repo}`](https://developer.github.com/v3/repos/#get-a-repository)
- `options` are all options passed to the CLI which are not used by `mutate-github-repositories`.

## Example

```
$ npx mutate-github-repositories \
  --token 0123456789012345678901234567890123456789 \
  example.js \
  octokit/*
```

See [example.js](example.js) for the syntax of a script.

## License

[ISC](LICENSE.md)
