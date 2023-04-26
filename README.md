# Octoherd CLI

> CLI to run a custom script on one or multiple repositories

## Usage

```
Usage: octoherd run -S path/to/script.js [options]

Options:
      --help                      Show help                                            [boolean]
  -S, --octoherd-script           Path to *.js script. Must be an ES Module. [string] [required]
  -T, --octoherd-token            Requires the "public_repo" scope for public repositories, "rep
                                  o" scope for private repositories. Creates an OAuth token if n
                                  ot set.                                               [string]
  -R, --octoherd-repos            One or multiple repositories in the form of 'repo-owner/repo-n
                                  ame'. 'repo-owner/*' will find all repositories for one owner.
                                   '*' will find all repositories the user has access to.
                                  To exclude a repository use '!repo-owner/repo'. Will prompt
                                  for repositories if not set.                           [array]
      --octoherd-cache            Cache responses for debugging. Creates a ./cache folder if fla
                                  g is set. Override by passing custom path             [string]
      --octoherd-debug            Show debug logs                     [boolean] [default: false]
      --octoherd-bypass-confirms  Bypass prompts to confirm mutating requests
                                                                      [boolean] [default: false]
      --octoherd-base-url         When using with GitHub Enterprise Server, set to the root URL 
                                  of the API. For example, if your GitHub Enterprise Server's h
                                  ostname is github.acme-inc.com, then set to https://github.ac
                                  me-inc.com/api/v3.                                    [string]
      --version                   Show version number                                  [boolean]

Examples:
  octoherd run -S path/to/script.js                 Minimal usage example
  octoherd run -S path/to/script.js -T $TOKEN  -R   Pass token and repos as CLI flags
  octoherd/cli
  octoherd run -S path/to/script.js -T $TOKEN  -R   Avoid prompts for token and repos
  octoherd/cli
  octoherd run -S path/to/script.js -T $TOKEN  -R   Avoid any prompts
  octoherd/cli --octoherd-bypass-confirms
  octoherd run -S path/to/script.js -T $TOKEN  -R   Will fetch all repositories except repo-owner/hello-world
  'repo-owner/*' -R '!repo-owner/hello-world
  octoherd run -S path/to/script.js                 Run octoherd script against GHES
  --octoherd-base-url 
  https://github.acme-inc.com/api/v3
```

The `script` must export a `script` function which takes three parameters:

```js
export async function script(octokit, repository, options) {
  // do something here
}
```

- `octokit` is an instance of [`octokit.js`'s Octokit](https://github.com/octokit/octokit.js)
- `repository` is the response data of [`GET /repos/{owner}/{repo}`](https://developer.github.com/v3/repos/#get-a-repository)
- `options` are all options passed to the CLI which are not used by `octoherd`.

## Examples

- https://github.com/topics/octoherd-script

## Similar projects

- [NerdWalletOSS/shepherd](https://github.com/NerdWalletOSS/shepherd) - A utility for applying code changes across many repositories.
- [FormidableLabs/multibot](https://github.com/FormidableLabs/multibot) - A friendly multi-repository robot

## License

[ISC](LICENSE.md)
