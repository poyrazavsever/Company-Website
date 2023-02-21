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
        "desktop" : {"min": "1024px"}
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}