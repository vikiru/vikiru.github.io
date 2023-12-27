/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "200px",
      xs: "250px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      heading: ["Montserrat"],
      subheading: ["Raleway"],
      body: ["Source Sans 3"],
      cinzel: ["Cinzel"],
      ...defaultTheme.fontFamily,
    },
    colors: {
      primary: "F2EFE9",
      secondary: "252627",
      accent: "F37748",
      backup: "564E58",
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
