import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import strip from "strip-json-comments";
import type {
  Options,
} from "strip-json-comments";

export function parse<T = Record<string, any>>(data: string, options?: Options): T | undefined {
  try {
    return new Function(`return ${strip(data, options).trim()}`)();
  } catch (_) {}
}

export async function parseFile<T = Record<string, any>>(path: string, options?: Options): Promise<T | undefined> {
  const content = await readFile(path, {
    encoding: "utf-8",
  });

  return parse(content, options);
}

export function parseFileSync<T = Record<string, any>>(path: string, options?: Options): T | undefined {
  const content = readFileSync(path, {
    encoding: "utf-8",
  });

  return parse(content, options);
}
