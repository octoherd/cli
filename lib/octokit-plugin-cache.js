import { URL } from "url";
import { dirname } from "path";

import mkdirp from "mkdirp";
import jsonfile from "jsonfile";

export function cache(octokit) {
  octokit.hook.wrap("request", async (request, options) => {
    if (options.method !== "GET") {
      return request(options);
    }

    const { url } = octokit.request.endpoint.parse(options);

    const { pathname, searchParams } = new URL(url);
    const page = searchParams.get("page");
    const cachePath = `./cache${pathname}${page ? `-page-${page}` : ""}.json`;

    try {
      return jsonfile.readFileSync(cachePath);
    } catch (error) {
      const response = await request(options);

      mkdirp.sync(dirname(cachePath));
      jsonfile.writeFileSync(cachePath, response);
      return response;
    }
  });
}
