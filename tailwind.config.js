/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainText: "#fcf3f3",
        secondaryText: "#e5ec86",
        // secondaryText: "#92d9eb",
        mainGray: "#212121",
        mainGrayTransparent: "#212121d2",
        secondaryGray: "#212121b0",
        thinLine: '#3b3b3b',
        priceColor: "#e4e7af",
        myViolet: '#ad91e5',
        myDarkViolet: '#a78bfa',
        myPink: '#f9a8d4',
        myBlue: '#92d9eb',
        myYellow: '#e5ec86'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}