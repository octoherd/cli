import Confirm from "prompt-confirm";

export function requestConfirm(octokit, { octoherd }) {
  octokit.hook.wrap("request", async (request, options) => {
    const requestOptions = octokit.request.endpoint.parse(options);
    const isMutatingRequest = ["POST", "PUT", "PATCH", "DELETE"].includes(
      options.method
    );
    const route = `${requestOptions.method} ${requestOptions.url}`;

    if (!octoherd.bypassConfirms && isMutatingRequest) {
      const prompt = new Confirm(`Do you want to send "${route}"`);
      const yes = await prompt.run();

      if (!yes) {
        const error = new Error(`"${route}" canceled`);
        error.cancel = true;
        throw error;
      }
    }

    return request(options);
  });
}
