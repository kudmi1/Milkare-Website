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
        // mainText: "hsl(240, 17%, 12%)",
        secondaryText: "#ffed90",
        priceColor: "#e4e7af",
        thinLine: '#ffffff36',
        cardBg: 'hsl(240, 17%, 12%)',
        // cardBg: 'hsl(248, 39%, 15%)',
        cardFieldBg: 'hsl(260, 100%, 13%, 20%)',
        homeColor: 'hsl(240, 17%, 12%)',
        accentColor: '#a78bfa',
        activeButton: 'hsl(240, 17%, 20%)',

        gradientBg: 'bg-gradient-to-b from-[#191924ef] to-[#1600419a] bg-opacity-70'
      },
    },
    
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}