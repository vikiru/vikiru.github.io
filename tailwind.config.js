/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./src/**/*.{html,ts,tsx}'],
    theme: {
        screens: {
            xxs: '200px',
            xs: '300px',
            sm: '500px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1792px',
            '3xl': '2048px',
            '4xl': '2304px',
            '5xl': '2560px',
            '6xl': '2816px',
            '7xl': '3072px',
            '8xl': '3328px',
            '9xl': '3584px',
            '10xl': '3840px',
            '11xl': '4096px',
        },
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#252627',
                accentSecondary: '#2152B5',
                accent: '#6F95E7',
                darkPrimary: '#191919',
                darkSecondary: '#222831',
                darkAccent: '#C84C09',
            },
            fontFamily: {
                heading: ['Raleway'],
                subheading: ['Open Sans'],
                body: ['Lato'],
                cinzel: ['Cinzel'],
            },
            fontSize: {
                '9xl': '8rem',
                '10xl': '9rem',
                '11xl': '10rem',
                '12xl': '11rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
};
