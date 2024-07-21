import { expect, it } from "vitest";
import { parse, parseFile, parseFileSync } from "../src";

it("parse jsonc from file (async)", async () => {
  const test1 = await parseFile("./tests/test1.jsonc");
  const test2 = await parseFile("./tests/test2.jsonc");

  expect(test1?.bb).toEqual([
    1,
    "Hey!",
  ]);
  expect(test1?.num).toBe(1);

  expect(test2?.aa).toBeTypeOf("object");
  expect(test2?.nested).toEqual({
    this: {
      is: {
        a: "nested",
      },
    },
  });

  expect(test1?.bar).toEqual(test2?.bar);
  expect(test1?.foo).toEqual(test2?.foo);
});

it("parse jsonc from file", () => {
  const test1 = parseFileSync("./tests/test1.jsonc");
  const test2 = parseFileSync("./tests/test2.jsonc");

  expect(test1?.bb).toEqual([
    1,
    "Hey!",
  ]);
  expect(test1?.num).toBe(1);

  expect(test2?.aa).toBeTypeOf("object");
  expect(test2?.nested).toEqual({
    this: {
      is: {
        a: "nested",
      },
    },
  });

  expect(test1?.bar).toEqual(test2?.bar);
  expect(test1?.foo).toEqual(test2?.foo);
});

it("parse jsonc from string", () => {
  const jsonC = parse(`
      {
        "bar": "foo",
        // This is a comment.
        "foo": /* This is also a comment */ "bar",

      }
    `);
  expect(jsonC).toEqual({
    bar: "foo",
    foo: "bar",
  });
});

it("handle trailing commas correctly", () => {
  const jsonC = parse(`
    {
      "bar": "foo",
      // This is a comment.
      "foo": /* This is also a comment */ "bar",
    }
  `);
  expect(jsonC).toEqual({
    bar: "foo",
    foo: "bar",
  });
});
