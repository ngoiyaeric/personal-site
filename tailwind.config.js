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
        background: "rgb(0, 0, 0)", // Set background to black
        "bg-opaque": "rgba(0, 0, 0, 0.25)", // Set opaque background to black with reduced opacity
        "background-light": "rgb(255, 255, 255)", // Set light background to white
        "background-dark": "rgb(0, 0, 0)", // Set dark background to black
        textcolour: "rgb(255, 255, 255)", // Set text color to white
        brand: "rgb(0, 0, 0)", // Set brand color to black
      },
      
    },
  },
  plugins: [],
};
