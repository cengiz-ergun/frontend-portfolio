/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    plugins: [require("flowbite/plugin"),    plugin(function ({ addComponents, theme }) {
        addComponents({
          '.top-left': { 
            "justify-content": "flex-start",
            "align-items": "flex-start"
          },
          '.middle-center': {
            "justify-content": "center",
            "align-items": "center"
          },
          ".top-center": {
            "justify-content": "flex-start",
            "align-items": "center"
          },       
          ".top-right": {
            "justify-content": "flex-start",
            "align-items": "flex-end"
          },          
          ".middle-left": {
            "justify-content": "center",
            "align-items": "flex-start"
          },          
          ".middle-right" :{
            "justify-content": "center",
            "align-items": "flex-end"
          },          
          ".bottom-left": {
            "justify-content": "flex-end",
            "align-items": "flex-start"
          },          
          ".bottom-center": {
            "justify-content": "flex-end",
            "align-items": "center"
          },          
          ".bottom-right": {
            "justify-content": "flex-end",
            "align-items": "flex-end"
          }
        })
      })],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
                button: "#7D4AEA",
                codeGeneration: "#333333",
                "size-selection": "#F5F5F5",
                "popup-position-selection": "#7D4AEA",
                "toggle": "#7D4AEA"
            },
            colors: {
                popUpListItemInnerText: "#7D4AEA",
                "popup-position-selection": "#DDDDDD",
                "upload-logo-image-border": "#DDDDDD",
                "content-input-border": "#DDDDDD",
                "popup-preview-input": "#D2DAE3"
            },

            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
    },
}
