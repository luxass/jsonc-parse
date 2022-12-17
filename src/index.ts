import { readFile } from "node:fs/promises";
import strip, {
  type Options
} from "strip-json-comments";

export function parseJSONC(data: string, options?: Options): Record<string, unknown> | undefined {
  try {
    return new Function(`return ${strip(data, options).trim()}`)();
  } catch (_) {}
}

export async function parseJSONCFile(path: string, options?: Options) {
  const content = await readFile(path, {
    encoding: "utf-8"
  });

  return parseJSONC(content, options);
}
