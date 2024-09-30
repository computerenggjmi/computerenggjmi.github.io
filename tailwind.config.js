/** @type {import('tailwindcss').Config} */
// import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "var(--green-light)",
        "green-deep": "var(--green-deep)",
        "green-yellow": "var(--green-yellow)",
        "black-deep": "var(--dark-black)",
      },
      screens: {
        xs: "475px",
      },
      // fontFamily:{
      //   sans: ['Lato', ...defaultTheme.fontFamily.sans],
      //   sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      // }
    },
  },
  plugins: [],
};
