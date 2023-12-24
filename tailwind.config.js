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
      heading: ["Montserrat"],
      subheading: ["Raleway"],
      body: ["Source Sans 3"],
      cinzel: ["Cinzel"],
      ...defaultTheme.fontFamily,
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar")],
};
