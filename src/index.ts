import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { strip } from "./strip";
import type {
  Options,
} from "./strip";

/**
 * Parse a JSON string, removing comments.
 * @param {string} data - The JSON string to parse.
 * @param {Options} options - The options to pass to `@luxass/strip-json-comments`.
 * @returns {T | undefined} The parsed JSON.
 *
 * NOTE:
 * This function is not safe to use with untrusted data due to the use of `new Function()`.
 */
export function parse<T = Record<string, any>>(data: string, options?: Options): T | undefined {
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return ${strip(data, options).trim()}`)();
  } catch {}
}

/**
 * Parse a JSON file, removing comments.
 * @param {string} path - The path to the file to parse.
 * @param {Options} options - The options to pass to `@luxass/strip-json-comments`.
 * @returns {Promise<T | undefined>} The parsed JSON.
 *
 * NOTE:
 * This function is not safe to use with untrusted data due to the use of `new Function()`.
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
 *
 * NOTE:
 * This function is not safe to use with untrusted data due to the use of `new Function()`.
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
