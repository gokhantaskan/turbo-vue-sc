import baseRules from "@acme/eslint-config/bases/rules.base.mjs";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().prepend(baseRules);
