import path from "node:path";
import { fileURLToPath } from "node:url";

import baseConfig from "@acme/eslint-config/base.mjs";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import("eslint").Linter.Config} */
export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["storybook-static/"],
  },
  ...baseConfig,
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
