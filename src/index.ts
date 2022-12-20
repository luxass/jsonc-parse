import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import strip from "strip-json-comments";
import type {
  Options
} from "strip-json-comments";

export function parse(data: string, options?: Options): Record<string, unknown> | undefined {
  try {
    return new Function(`return ${strip(data, options).trim()}`)();
  } catch (_) {}
}

export async function parseFile(path: string, options?: Options) {
  const content = await readFile(path, {
    encoding: "utf-8"
  });

  return parse(content, options);
}

export function parseFileSync(path: string, options?: Options) {
  const content = readFileSync(path, {
    encoding: "utf-8"
  });

  return parse(content, options);
}
