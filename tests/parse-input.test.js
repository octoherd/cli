import { parseInput } from "../bin/parse-input.js";
import { suite } from "uvu";
import { equal } from "uvu/assert";

const parseTest = suite("parse-input");

parseTest("when input is empty", () => {
    equal([], parseInput());
});

parseTest("when input is a single line", () => {
    equal(['foo'], parseInput('foo'));
});

parseTest("when input has multipe lines", () => {
    equal(['foo', 'bar'], parseInput('foo\nbar'));
});

parseTest("when input contains multipe empty lines", () => {
    equal(['foo', 'bar', 'baz'], parseInput('foo\n\n\nbar\n\nbaz\n\n'));
});

parseTest("when line contains leading or trailing whitespaces", () => {
    equal(['foo', 'bar'], parseInput('foo \n bar'));
});

parseTest("when lines start with a comment delimiter", () => {
    equal(['foo'], parseInput('foo\n//bar\n#baz'));
});

parseTest.run();
