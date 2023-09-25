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
        secondaryText: "#ffed90",
        priceColor: "#e4e7af",
        thinLine: '#6c7765',
        cardBg: 'hsl(240, 17%, 12%)',
        cardFieldBg: 'hsl(215, 36%, 18%)',
        homeColor: 'hsl(240, 17%, 12%)',
        accentColor: '#a78bfa'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}