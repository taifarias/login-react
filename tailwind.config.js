/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      100: '#F0F0F0',
      200:'#50C6E8',
      300: '#105EA7',
      400: '#4C77A6',
      500: '#101627'
    },

    fontFamily: {
      'title': ["Roboto Condensed", "sans-serif"],
      'mid': ["Taviraj", "serif"],
      'p': ["Amethysta", "serif"]

    },

    extend: {},
  },
  plugins: [],
}

