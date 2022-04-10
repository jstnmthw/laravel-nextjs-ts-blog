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
            },
            backgroundImage: {
                blog: "url('/img/blog-dark.png')",
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
