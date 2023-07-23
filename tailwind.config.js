/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/globals.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['BBC-Reith-Sans', 'sans-serif'],
        secondary: ['Saira-Stencil-One', 'sans-serif'],
      },
    },
    fontSize: {
      '6xl': '3.815rem', // 61.04px
      '5xl': '3.052rem', // 48.83px
      '4xl': '2.441rem', // 39.06px
      '3xl': '1.953rem', // 31.25px
      '2xl': '1.563rem', // 25px
      xl: '1.25rem', // 20px
      base: '1rem', // 16px
      sm: '0.64rem', // 12.8px
      xs: '0.512rem', // 10.24px
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      text: '#f8fafc',
      background: '#10181e',
      primary: '#b2c32c',
      secondary: '#18261d',
      accent: '#1aafea',
    },
  },
  plugins: [],
};
