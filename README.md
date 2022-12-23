# jsonc-parse

> A lightweight JSON with Comments parser.

<p align="center">
  <a href="https://www.npmjs.com/package/jsonc-parse"><img src="https://img.shields.io/npm/v/jsonc-parse?style=for-the-badge&color=3FA7D6&label="></a>
<p>

## Install
```bash
npm install jsonc-parse
```


## Usage

```ts
import { parse, parseFile, parseFileSync } from "jsonc-parse";

// From file async
const jsonCFile = await parseFile("./config.jsonc");

// From file
const jsonCFile = parseFileSync("./config.jsonc");

// From string
const jsonC = parse(`
{
  "bar": "foo",
  // This is a comment.
  "foo": /* This is also a comment */ "bar",
}`);
```
