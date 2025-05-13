const plugin = require('@tailwindcss/typography');

module.exports = {
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: "#792e88",
                secondary: "#88A02E",
            },

            fontFamily: {
                body: ["Poppins", "Sans serif"],
            },

            fontSize: {
                xxs: '0.6rem'
            }
        },
    },

    content: [
        "./node_modules/flowbite/**/*.js",
        "./resources/views/**/*.blade.php"
    ],

    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
        require("@tailwindcss/typography"),
        plugin(function({ addUtilities }) {
            addUtilities({
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none',
                },
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
            })
        }),
    ],
};
