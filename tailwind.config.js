const plugin = require('tailwindcss/plugin');
const {
  screenPatch,
  spacingPatch,
  insetPatch,
  maxWidthPatch,
  gridPatch,
} = require('@izznatsir/tailwind-patches');

module.exports = {
  theme: {
    fontFamily: {
      sans: `Inter, 'Helvetica Neue', 'Segoe UI', sans-serif`,
    },
    extend: {
      screens: screenPatch,
      spacing: spacingPatch,
      inset: insetPatch,
      maxWidth: maxWidthPatch,
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(gridPatch);
    }),
  ],
};
