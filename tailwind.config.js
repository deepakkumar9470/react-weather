/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg': "url('https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        cardShadow: 'rgba(0, 0, 0, 0.1) -5px 9px 10px -7px'
      },
      colors : {
        bgColor : '#1A1A2E',
        primaryColor1 :'#1F1D36',
        primaryColor2 :'#393E46',
        txtColor :'#EEEEEE',
        bgMain: 'rgb(246,246,248)',
        txtTime: 'rgb(197, 197, 197)'
      }
    },
  },
  plugins: [],
}

