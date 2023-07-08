/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["BBC-Reith-Sans"],
      },
    },
    colors: {
      text: "#f8fafc",
      background: "#10181e",
      primary: "#b2c32c",
      secondary: "#18261d",
      accent: "#1aafea",
    },
    screens: {},
  },
  plugins: [],
};
