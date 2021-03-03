export const cliOptions = {
  "octoherd-token": {
    description:
      'Requires the "public_repo" scope for public repositories, "repo" scope for private repositories.',
    demandOption: true,
    type: "string",
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
