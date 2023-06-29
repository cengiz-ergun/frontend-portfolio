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
            boxShadow: {
              'button-smaller': '0px 3px 7px 1px rgba(125, 74, 234, 0.20)',
              'button-bigger': '0px 5px 10px 2px rgba(125, 74, 234, 0.27)',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-main": "linear-gradient(180deg, #FFF 0%, #E3F2F6 100%)",
                "gradient-transparent": "linear-gradient(214deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)",
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
                "quality": "#F5F5F5",
                "faq-active": "#F5F5F5",
                "popup-position-selection": "#7D4AEA",
                "toggle": "#7D4AEA",
                "custom-gray": "#666666"
            },
            colors: {
                popUpListItemInnerText: "#7D4AEA",
                "popup-position-selection": "#DDDDDD",
                "upload-logo-image-border": "#DDDDDD",
                "content-input-border": "#DDDDDD",
                "faq-passive": "#777",
                "faq-active": "#000",
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
