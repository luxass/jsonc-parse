# jsonc-parse

## ✨ Features

- ESM Support
- Tree Shakeable
- Lightweight

## 📦 Installation

```sh
pnpm install jsonc-parse
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

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev`

## 📄 License

Published under [MIT License](./LICENSE).
