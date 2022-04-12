const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            maxWidth: {
                '8xl': '90rem',
            },
            colors: {
                navy: {
                    900: '#11192c',
                },
                purple: {
                    DEFAULT: '#351C80',
                    50: '#CBBFF1',
                    100: '#B7A5EB',
                    200: '#8E73E0',
                    300: '#6641D5',
                    400: '#4A27B2',
                    500: '#351C80',
                    600: '#2C176B',
                    700: '#241356',
                    800: '#1B0E41',
                    900: '#120A2C',
                },
            },
            backgroundImage: {
                blog: "url('/img/blog-dark.png')",
                gradient: "url('/img/gradient-bg.png')",
                'gradient-md': "url('/img/gradient-bg-md.png')",
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
