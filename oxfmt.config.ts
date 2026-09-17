import { defineConfig } from "oxfmt";

export default defineConfig({
  singleQuote: false,
  semi: true,
  sortPackageJson: true,
  sortImports: {
    groups: [
      ["type-import"],
      ["type-builtin", "value-builtin"],
      ["type-external", "value-external", "type-internal", "value-internal"],
      ["type-parent", "type-sibling", "type-index", "value-parent", "value-sibling", "value-index"],
      ["unknown"],
    ],
    newlinesBetween: true,
    order: "asc",
  },
});
