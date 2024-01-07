/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "200px",
      xs: "300px",
      "2xl": "1792px",
      "3xl": "2048px",
      "4xl": "2304px",
      "5xl": "2560px",
      "6xl": "2816px",
      "7xl": "3072px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      heading: ["Raleway"],
      subheading: ["Open Sans"],
      body: ["Lato"],
      cinzel: ["Cinzel"],
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#252627",
      accentSecondary: "#2152B5",
      accent: "#6F95E7",
      darkPrimary: "#191919",
      darkSecondary: "#222831",
      darkAccent: "#C84C09",
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
