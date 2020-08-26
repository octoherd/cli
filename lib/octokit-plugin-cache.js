module.exports = { cache };

const { URL } = require("url");
const { dirname } = require("path");

const mkdirp = require("mkdirp");
const { readFileSync, writeFileSync } = require("jsonfile");

function cache(octokit) {
  octokit.hook.wrap("request", async (request, options) => {
    if (options.method !== "GET") {
      return request(options);
    }

    const { url } = octokit.request.endpoint.parse(options);

    const { pathname, searchParams } = new URL(url);
    const page = searchParams.get("page");
    const cachePath = `./cache${pathname}${page ? `-page-${page}` : ""}.json`;

    try {
      return readFileSync(cachePath);
    } catch (error) {
      const response = await request(options);

      mkdirp.sync(dirname(cachePath));
      writeFileSync(cachePath, response);
      return response;
    }
  });
}
