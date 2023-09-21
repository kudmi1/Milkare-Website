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
        // secondaryText: "#92d9eb",
        mainGray: "#212121",
        mainGrayTransparent: "#212121d2",
        thinLine: '#e5ec86',
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