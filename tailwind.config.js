/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      xxs: "300px",
      ...defaultTheme.screens,
    },
  },
  extend: {},
  plugins: [],
};
