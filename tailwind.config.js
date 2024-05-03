/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adm: {
          "light": "#e3f2fd",
          "pale": "#c0dded",
          "light-sky": "#96d3f4",
          "sky": "#86d5fe",
          "medium-sky": "81cdf5",
          "medium": "#6aaacb",
          "dark": "#0077b6",
          "deep": "#006d77",
      }
      },
      screens: {
        xsm: '320px',
      },
      fontFamily: {
        fascinate: ["Fascinate", "Georgia", "sans-serif"],
        inter: ["Inter", "Arial", "sans-serif"],
        poppins: ["Poppins", "Georgia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
