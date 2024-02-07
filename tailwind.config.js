/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem',
      },
      fontFamily: {
        'theme': 'Edu TAS Beginner'
      },
      animation: {
        tilt : "tilt 5s infinite linear",
        'spin-slow': "spin 4s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%":{
            transform: "rotate(0deg)"
          }, 
          "50%":{
            transform: "rotate(0deg)"
          }, 
          "100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1.5deg)",
          },
          "75%": {
            transform: "rotate(-1.5deg)",
          }

        }
      },
    },
  },
  plugins: [],
}

