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
        bbc: ['BBC-Reith-Sans', 'sans-serif'],
        saira: ['Saira-Stencil-One', 'sans-serif'],
        jetBrains: ['JetBrains-Mono', 'sans-serif'],
        inter: ['Inter-Black'],
      },
    },
    fontSize: {
      '6xl': '3.5rem', // 56px
      '5xl': '3rem', // 48px
      '4xl': '2rem', // 32px
      '3xl': '1.5rem', // 24px
      '2xl': '1.25rem', // 20px
      xl: '1.125rem', // 18px
      base: '1rem', // 16px
      sm: '0.875rem', //14px
      xs: '0.75rem', // 12px
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      'catskill-white': {
        50: '#f8fafc', // starter
        100: '#e9eff5',
        200: '#cedde9',
        300: '#a3c1d6',
        400: '#729fbe',
        500: '#5083a7',
        600: '#3d698c',
        700: '#325572',
        800: '#2d495f',
        900: '#293e51',
        950: '#1b2836',
      },
      bunker: {
        50: '#f4f8f9',
        100: '#dbe8ec',
        200: '#b7cfd8',
        300: '#8baebd',
        400: '#628b9f',
        500: '#487084',
        600: '#385769',
        700: '#304755',
        800: '#2a3a45',
        900: '#26333b',
        950: '#10181e', // starter
      },
      atlantis: {
        50: '#fbfce9',
        100: '#f5f7d0',
        200: '#eaefa7',
        300: '#dae373',
        400: '#c5d348',
        500: '#b2c32c', // starter
        600: '#83931d',
        700: '#63701b',
        800: '#50591b',
        900: '#434c1b',
        950: '#232a09',
      },
      'racing-green': {
        50: '#f2f7f3',
        100: '#e0ebe1',
        200: '#c4d6c7',
        300: '#9cb9a2',
        400: '#709779',
        500: '#50795b',
        600: '#3c5f46',
        700: '#304c39',
        800: '#273e2e',
        900: '#213327',
        950: '#18261d', // starter
      },
      'picton-blue': {
        50: '#f0f9ff',
        100: '#e1f3fd',
        200: '#bce7fb',
        300: '#81d5f8',
        400: '#3ec0f2',
        500: '#1aafea', // starter
        600: '#0887c1',
        700: '#086c9c',
        800: '#0b5b81',
        900: '#0f4b6b',
        950: '#0a3147',
      },
    },
  },
  plugins: [],
};
