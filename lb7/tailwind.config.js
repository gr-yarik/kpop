module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      opacity: ['disabled']
    },
  },
  // plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
