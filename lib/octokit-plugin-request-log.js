export function requestLog(octokit) {
  octokit.hook.wrap("request", (request, options) => {
    const start = Date.now();
    const requestOptions = octokit.request.endpoint.parse(options);
    const path = requestOptions.url.replace(options.baseUrl, "");

    return request(options)
      .then((response) => {
        const time = Date.now() - start;
        octokit.log.debug(
          { request: { ...options, time } },
          `${requestOptions.method} ${path} - ${response.status} in ${time}ms`
        );
        return response;
      })

      .catch((error) => {
        const time = Date.now() - start;

        octokit.log.debug(
          { request: { ...options, time } },
          `${requestOptions.method} ${path} - ${error.status} in ${time}ms`
        );
        throw error;
      });
  });
}
