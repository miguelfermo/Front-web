/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
        'orange': {
          'light': '#ecbd65',
          'primary': '#f39912',
          'dark': '#D9601A',
        },
        'brown': '#58290e',
      },
      fontFamily: {
        'farmhouse': ['font1', 'serif'],
        'santello': ['font2', 'serif'],
      },
    },
  },
  plugins: [],
}
