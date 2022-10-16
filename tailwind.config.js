/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          white: '#F5F6FA',
          lightgray: '#E6E9F4',
          midgray: '#D7DBEC',
          gray: '#7E84A3',
          black: '#131523',

          blue: '#0058FF',
          cyan: '#57B8FF',

          red: '#F0142F',
          yellow: '#FFC700',
          orange: '#F99600',

          green: '#21D59B',
        },
      },
    },
  },
  plugins: [],
};
