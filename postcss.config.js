const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        "focus-visible-pseudo-class": false
      }
    })
  ],
}
