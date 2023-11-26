/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  purge: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
  },
  extend: {},
  plugins: [],
};
