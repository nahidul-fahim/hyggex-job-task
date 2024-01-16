/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#06286E",
      second: "#2284F1",
      lightGray: "#696671",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        main: "'Inter', sans-serif",
        second: "'Montserrat', cursive",
      }
    },
  },
  plugins: [],
}