import { writeFile } from "fs/promises";

import prettier from "prettier";
import OpenAPI from "@octokit/openapi";

const spec = OpenAPI.schemas["api.github.com.deref"];

const ENDPOINTS = {};
const PATH = "lib/generated/endpoints.js";

for (const [path, methods] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(methods)) {
    ENDPOINTS[`${method.toUpperCase()} ${path}`] = {
      name: operation.summary,
      documentationUrl: operation.externalDocs?.url,
    };
  }
}

await writeFile(
  PATH,
  prettier.format(`export const ENDPOINTS = ${JSON.stringify(ENDPOINTS)}`, {
    parser: "babel",
  })
);
console.log("%s updated", PATH);
