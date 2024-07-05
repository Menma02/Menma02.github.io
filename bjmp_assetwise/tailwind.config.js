/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1B5374',
      'orange': '#FFAB2E',
      'white': '#F4F4F4',
      'gray': '#CECECE',
      'black': '#020002',
    },
    fontFamily:{
      'pops': 'Poppins, sans-serif',  
    },
    extend: {  
      height: {
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh',
    },
    backgroundImage:{
      'header-bg': "url('./images/header-bg.png')",
      'card-bg': "url('./images/card-bg.png')",
    }
  },
  plugins: [],
  }
}