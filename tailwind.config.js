/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "rgb(245, 245, 220)", // Set background to beige
        "bg-opaque": "rgba(245, 245, 220, 0.25)", // Set opaque background to beige with reduced opacity
        "background-light": "rgb(192, 255, 192)", // Set light background to light olive
        "background-dark": "rgb(0, 0, 0)", // Set dark background to black
        textcolour: "rgb(0, 0, 0)", // Set text color to black
        brand: "rgb(245, 245, 220)", // Set brand color to beige
    },
    
      
    },
  },
  plugins: [],
};
