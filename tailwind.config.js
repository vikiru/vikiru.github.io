/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "200px",
      xs: "250px",
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
      backup: "#564E58",
      darkPrimary: "#001514",
      darkSecondary: "#c0c0c0",
      darkAccent: "#C84C09",
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
