import type {
  Options,
} from "./strip";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { strip } from "./strip";

/**
 * Parse a JSON string, removing comments.
 * @param {string} data - The JSON string to parse.
 * @param {Options} options - The options to pass to `@luxass/strip-json-comments`.
 * @returns {T | undefined} The parsed JSON.
 */
export function parse<T = Record<string, any>>(data: string, options?: Options): T | undefined {
  try {
    // fast path if the json is valid.
    return JSON.parse(data);
  } catch {
    return JSON.parse(strip(data, {
      ...options,
      trailingCommas: true,
    }));
  }
}

/**
 * Parse a JSON file, removing comments.
 * @param {string} path - The path to the file to parse.
 * @param {Options} options - The options to pass to `@luxass/strip-json-comments`.
 * @returns {Promise<T | undefined>} The parsed JSON.
 */
export async function parseFile<T = Record<string, any>>(path: string, options?: Options): Promise<T | undefined> {
  const content = await readFile(path, {
    encoding: "utf-8",
  });

  return parse(content, options);
}

/**
 * Parse a JSON file, removing comments.
 * @param {string} path - The path to the file to parse.
 * @param {Options} options - The options to pass to `@luxass/strip-json-comments`.
 * @returns {T | undefined} The parsed JSON.
 */
export function parseFileSync<T = Record<string, any>>(path: string, options?: Options): T | undefined {
  const content = readFileSync(path, {
    encoding: "utf-8",
  });

  return parse(content, options);
}

export {
  strip,
};
export type { Options };
