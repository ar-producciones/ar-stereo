/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans':['sans-serif'],
      montserrat: ['Montserrat']
    },
    extend: {
      colors: {
        white: '#f6f6f6',
        'black-light': '#0a0a0a',
        'gold-light': '#d0b257',
        'gold-extra-light': '#dcbe60',
        'red':'#C50000',
        'gray-100': '#f1f3f4'
        
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.8xl') },
        h2: { fontSize: theme('fontSize.6xl') },
        h3: { fontSize: theme('fontSize.4xl') },
      });
    }),
  ],
};