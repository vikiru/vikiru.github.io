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
                heading: ['Raleway', 'sans-serif'],
                subheading: ['Open Sans', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
                cinzel: ['Cinzel', 'serif'],
                hind: ['Hind', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                'clamp-h1': 'clamp(1.25rem, 2.5vw, 8rem)',
                'clamp-h2': 'clamp(1.65rem, 2vw, 4.5rem)',
                'clamp-h3': 'clamp(1.25rem, 1.7vw, 4.5rem)',
                'clamp-h4': 'clamp(1rem, 1.5vw, 4.5rem)',
                'clamp-h5': 'clamp(0.8rem, 1.25vw, 4rem)',
                'clamp-p': 'clamp(1rem, 1.5vw, 4.5rem)',
                'clamp-card': 'clamp(0.8rem, 1.25vw, 4rem)',
                'clamp-tech': 'clamp(0.65rem, 1vw, 4rem)',
                'clamp-info': 'clamp(0.7rem, 1.125vw, 3.5rem)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
};
