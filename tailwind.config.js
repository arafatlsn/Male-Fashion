/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightBlack: "#111111",
      lightRed: "#e53637",
    },
    screens: {
      sm: "0px - 480px",
      lg: "1170px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
