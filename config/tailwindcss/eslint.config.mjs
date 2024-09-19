import baseConfig from "@acme/eslint-config/base.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ["dist/", "node_modules/"],
  },
  ...baseConfig,
];
