import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

import baseRules from "./bases/rules.base.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,cts,mts,tsx}"],
    ignores: [
      "**/node_modules/",
      "**/.turbo/",
      "**/dist/",
      "**/build/",
      "**/.output/",
      "**/coverage/",
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
  },
  ...baseRules,
];
