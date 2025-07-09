/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '900px', // Breakpoint مخصص عند 900px
      },
      fontFamily: {
        'IBM_Plex_Sans_Arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}