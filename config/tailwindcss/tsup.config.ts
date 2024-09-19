import { defineConfig } from "tsup";

export default defineConfig(options => ({
  clean: true,
  dts: true,
  minify: !options.watch,
  sourcemap: false,
  format: ["esm", "cjs"],
  entry: ["src/tailwind.config.ts"],
  tsconfig: "./tsconfig.json",
}));
