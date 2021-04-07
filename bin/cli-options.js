// @ts-check

/** @type { {[key: string]: import("yargs").Options} } */
export const cliOptions = {
  "octoherd-token": {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.',
    demandOption: true,
    type: "string",
    alias: "T",
  },
  "octoherd-script": {
    description: "Path to *.js script. Must be an ES Module.",
    demandOption: true,
    type: "string",
    alias: "S",
  },
  "octoherd-repos": {
    description:
      "One or multiple repositories in the form of 'repo-owner/repo-name'. 'repo-owner/*' will find all repositories for one owner. '*' will find all repositories the user has access to",
    type: "string",
    array: true,
    demandOption: true,
    alias: "R",
  },
  "octoherd-cache": {
    description:
      "Cache responses for debugging. Creates a ./cache folder if flag is set. Override by passing custom path",
    type: "string",
  },
  "octoherd-debug": {
    description: "Show debug logs",
    type: "boolean",
    default: false,
  },
  "octoherd-bypass-confirms": {
    description: "Bypass prompts to confirm mutating requests",
    type: "boolean",
    default: false,
  },
};
