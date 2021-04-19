import { suite } from "uvu";
import { equal } from "uvu/assert";

import * as CLI from "../index.js";

const smokeTest = suite("smoke");

smokeTest("exports octoherd function", () => {
  equal(typeof CLI.octoherd, "function");
});

smokeTest("exports Octokit contructor", () => {
  equal(typeof CLI.Octokit, "function");
});

smokeTest.run();
