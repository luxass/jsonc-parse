import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  treeshake: true,
  bundle: true,
  outExtension(ctx) {
    return {
      js: ctx.format === "cjs" ? "cjs" : "mjs",
    };
  },
});
