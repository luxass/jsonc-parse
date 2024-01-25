# jsonc-parse

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
