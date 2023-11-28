/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      heading: ["Montserrat"],
      subheading: ["Raleway"],
      body: ["Source Sans 3"],
      ...defaultTheme.fontFamily,
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
