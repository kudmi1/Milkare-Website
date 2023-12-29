/** @type {import('tailwindcss').Config} */
export default {
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
    
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
     }
    
  },
  plugins: [require("@tailwindcss/typography")],
}