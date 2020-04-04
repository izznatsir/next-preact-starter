const plugin = require('tailwindcss/plugin');
const {
  changeRemValue,
  baseFiveFontSize,
  screenPatch,
  spacingPatch,
  insetPatch,
  maxWidthPatch,
  gridPatch,
} = require('@izznatsir/tailwind-patches');

const {
  screenPatch,
  spacingPatch,
  maxWidthPatch,
  gridPatch,
} = require('./tailwind-patches');

module.exports = {
  theme: {
    fontFamily: {
      sans: `Inter, 'Helvetica Neue', 'Segoe UI', sans-serif`,
    },
    fontSize: baseFiveFontSize,
    extend: {
      screens: screenPatch,
      spacing: spacingPatch,
      inset: insetPatch,
      maxWidth: maxWidthPatch,
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, addUtilities, config }) {
      changeRemValue(addBase, config);
      addUtilities(gridPatch);
    }),
  ],
};
