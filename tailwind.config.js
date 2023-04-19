/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens : {
        "mobile" : {"max" : "1023px", "min" : "0px"},
        "desktop" : {"min": "1024px"},
        "animation" : {"max" : "1300px", "min" : "0px"}
      },
      
      animation: {
        sliderAnimation: 'scroll 40s linear infinite',
        sliderStart: 'sliderStart .6s ease-in-out',
      },


      keyframes: {
        scroll: {
          '0%' : {transform: 'translateX(0)' },
          '100%': {transform : 'translateX(-3500px)'}
        },
        sliderStart: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}