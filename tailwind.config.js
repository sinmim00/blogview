/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'yellow' :'hsl(47, 88%, 63%)',
        'white' : 'hsl(0, 0%, 100%)',
        'gray500': 'hsl(0, 0%, 42%)',
        'gray950': 'hsl(0, 0%, 7%)'
      },
      fontFamily: {
        primary:'Figtree'},
        screens:{
          'desktop': '1440px',
          'mobile': '320',
          'tablet': '700px'
          
        }
    },
  },
  plugins: [],
}

