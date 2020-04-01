const plugin = require('tailwindcss/plugin');
const {
  changeREMValue,
  baseFiveFontSize,
} = require('./tailwind-patches/base-five');
const {
  screenPatch,
  spacingPatch,
  maxWidthPatch,
  gridPatch,
} = require('./tailwind-patches');

module.exports = {
  theme: {
    fontSize: baseFiveFontSize,
    extend: {
      screens: screenPatch,
      spacing: spacingPatch,
      maxWidth: maxWidthPatch,
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, addUtilities, config }) {
      changeREMValue(addBase, config);
      addUtilities(gridPatch);
    }),
  ],
};
