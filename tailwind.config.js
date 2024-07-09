// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ta-purple": "#B78FD6",
        "ta-blue": "#3C6CA8", 
        "ta-green": "#5EB090",
        "ta-red": "#e3342f",
        "ta-yellow": "#F4DB39"
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        'hammersmith': ['Hammersmith One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
