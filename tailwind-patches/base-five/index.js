const changeREMValue = (addBase, config) => {
  addBase({
    html: { fontSize: '20px' },
    body: { fontSize: config('theme.fontSize.base') },
  });
};

const baseFiveFontSize = {
  xs: '0.5rem',
  sm: '0.65rem',
  base: '0.75rem',
  md: '0.85rem',
  lg: '1rem',
  xl: '1.15rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  '4xl': '1.75rem',
  '5xl': '2.5rem',
  '6xl': '3.25rem',
};

module.exports = {
  changeREMValue,
  baseFiveFontSize,
};
