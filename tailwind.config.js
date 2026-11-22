/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bat: {
          black: '#08090d',
          panel: '#11141b',
          yellow: '#f5c542',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(245, 197, 66, 0.16)',
      },
    },
  },
  plugins: [],
};
