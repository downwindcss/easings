module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  presets: [require('@downwindcss/easings')],
  theme: {
    extend: {
      height: {
        'screen-80': '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
