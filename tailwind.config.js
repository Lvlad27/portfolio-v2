/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "color-1": "#272727",
      "color-2": "#202020",
      "color-3": "#feda4e",
      "color-4": "#a6a6a6",
      "color-5": "#241f0b",
      "color-6": "#f4f4f4",
    },
    fontFamily: {
      sans: ["", ""],
      serif: ["", ""],
    },
  },
  plugins: [],
};
