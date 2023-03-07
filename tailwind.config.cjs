/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      header: ['Arial'],
      body: ['Campton'],
    },
    extend: {
      colors: {
        primary: '#F3654A',
        dark: '#110B2D',
        rose: '#E62B4A',
        bodyText: '#B1A0BD',
        breatheColor: '#333333;',
        orange: '#F3654A',
        footerColor: '#B8A6C1',
        footerBackground: '#3B1754',
        footerBottom: '#110B2D',
      },
      screens: {
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '940px' },
        sm: { max: '640px' },
      },
    },
  },
  plugins: [],
};
