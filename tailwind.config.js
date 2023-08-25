/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mainText: "#f9ded1",
        mainText: "#fcf3f3",
        secondaryText: "#e5ec86",
        mainGray: "#212121",
        mainGrayTransparent: "#212121d2",
        thinLine: '#3b3b3b',
        priceColor: "#e4e7af"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}