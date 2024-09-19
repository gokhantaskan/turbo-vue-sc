export default {
  plugins: {
    tailwindcss: {},
    "postcss-preset-env": {
      stage: 3,
      minimumVendorImplementations: 2,
      preserve: true,
      // List of features: https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
      features: {
        "nesting-rules": {
          noIsPseudoSelector: false,
        },
        "custom-media-queries": {
          preserve: true,
        },
      },
    },
  },
};
