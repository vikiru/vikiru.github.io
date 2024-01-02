/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "200px",
      xs: "250px",
      "2xl": "1792px",
      "3xl": "2048px",
      "4xl": "2304px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      heading: ["Raleway"],
      subheading: ["Open Sans"],
      body: ["Lato"],
      cinzel: ["Cinzel"],
      ...defaultTheme.fontFamily,
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#252627",
      accent: "#648DE5",
      darkPrimary: "#191919",
      darkSecondary: "#222831",
      darkAccent: "#C84C09",
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
