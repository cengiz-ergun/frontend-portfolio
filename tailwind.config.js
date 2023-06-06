/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                poppins: "Poppins",
                inter: "Inter",
            },
            backgroundColor: {
                subHeaderNumberBg: "#EAEAEA",
                paginations: "#F5F5F5",
                popUpListItemHoverOrSelected: "#7D4AEA99",

                "size-selection": "#F5F5F5",
                "popup-position-selection": "#7D4AEA"
            },
            colors: {
                popUpListItemInnerText: "#7D4AEA",
                "popup-position-selection": "#DDDDDD"
            },
        },
    },
    plugins: [],
}
