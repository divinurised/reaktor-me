const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Spartan',
      serif: 'Merriweather',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        000: '#f6f7f8',
        100: 'rgba(36,39,49,.4)',
        150: 'rgba(36, 39, 49, 0.67)',
        200: '#242730',
      },
      orange: {
        100: '#FF5544',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
