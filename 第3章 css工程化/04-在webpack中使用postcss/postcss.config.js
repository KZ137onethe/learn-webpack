const postcssPresetEnv = require("postcss-preset-env");
const postcssColorMod = require("postcss-color-mod-function");
const atImport = require("postcss-import");

module.exports = {
  map: false,
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "custom-selectors": true,
        "nesting-rules": true,
      },
      preserve: false,
    }),
    postcssColorMod(),
    atImport({}),
  ],
};
