/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fascinate: ["Fascinate", "Georgia", "sans-serif"],
        inter: ["Inter", "Arial", "sans-serif"],
        poppins: ["Poppins", "Georgia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
