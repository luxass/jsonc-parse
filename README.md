# jsonc-parse

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![jsr version][jsr-version-src]][jsr-version-href]

## ✨ Features

- ESM Support
- Tree Shakeable
- Lightweight

## 📦 Installation

```sh
npm install jsonc-parse
```

## 📚 Usage

```ts
import { parse, parseFile, parseFileSync } from "jsonc-parse";

// From file async
const jsonCFile = await parseFile("./config.jsonc");

// From file
const jsonCFile = parseFileSync("./config.jsonc");

// From string
const jsonC = parse(`{
  "bar": "foo",
  // This is a comment.
  "foo": /* This is also a comment */ "bar",
}`);
```

you can also just import the `strip` function to remove comments from a string.

```ts
import { strip } from "jsonc-parse/strip";

// or
import { strip } from "jsonc-parse";

const json = strip(`{
  "bar": "foo",
  // This is a comment.
  "foo": /* This is also a comment */ "bar",
}`);
JSON.parse(strip(json)); // { bar: "foo", foo: "bar" }
```

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/jsonc-parse?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/jsonc-parse
[npm-downloads-src]: https://img.shields.io/npm/dm/jsonc-parse?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/jsonc-parse
[jsr-version-src]: https://jsr.io/badges/@luxass/jsonc-parse?style=flat&labelColor=18181B&logoColor=4169E1
[jsr-version-href]: https://jsr.io/@luxass/jsonc-parse
