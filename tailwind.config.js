const plugin = require('tailwindcss/plugin');
const {
  screenPatch,
  spacingPatch,
  maxWidthPatch,
  gridPatch
} = require('./tailwind-patches');

module.exports = {
  theme: {
    extend: {
      screens: screenPatch,
      spacing: spacingPatch,
      maxWidth: maxWidthPatch
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities(gridPatch);
    })
  ]
};
