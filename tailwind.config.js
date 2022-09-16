/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightBlack: "#111111"
    },
    screens: {
      lg: "1170px"
    }
  },
  plugins: [require('flowbite/plugin')],
};
