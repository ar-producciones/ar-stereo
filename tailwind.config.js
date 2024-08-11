/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
       'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        'gold':'#daa520',
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
        h4: { fontSize: theme('fontSize.3xl') },
      });
    }),
  ],
};