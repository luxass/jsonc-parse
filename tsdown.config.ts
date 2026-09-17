import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/strip.ts"],
  format: "esm",
  clean: true,
  dts: true,
  treeshake: true,
  publint: true,
  exports: true,
});
