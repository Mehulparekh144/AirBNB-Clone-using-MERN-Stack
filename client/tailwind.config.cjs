/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary : ['Outfit', 'sans-serif']
    },
    extend: {
      colors : {
        primary : '#5D3891',
      }
    },
  },
  plugins: [],
}
