/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "macaco" : "url(./src/assets/monkey.svg)",
        "web" : "url(./src/assets/webgif.gif)",
      },
      colors: {
        backgroundLight: {
          'adm': '#e3f2fd',
        },
        backgroundMedium: {
          'adm': '#86d5fe',
        },
        backgroundDeep: {
          'adm':'#6aaacb'
        },
        button: {
          'adm': '#0077b6',
        },
        buttonLesson: {
          'adm': '#86d5fe'
        },
        title: {
          'adm': '#0077b6',
        },
        titlePages: {
          'adm': '#888888'
        },
        titlePrincipal: {
          'adm': '#006d77',
        }, 
        textGray: {
          'adm': '#9E9E9E',
        }
      },
      screens: {
        xsm: {'max': '320px'},
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
