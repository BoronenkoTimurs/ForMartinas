/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F13959",
        yellow: "#FBC13C",
        purple: "#7E7ADA",

        pinkHover: "#CA2D48",
        yellowHover: "#D89600",

        signUpBtn: "#7E7ADA",
        loginBtn: "#FBC13C",
        grey: "#999999",
      },
      backgroundImage: {
        "home-page": "url('./src/assets/homeBG.jpeg')",
      },
      fontSize: {
        "10xl": "200px",
      },
    },
  },
  plugins: [],
};
