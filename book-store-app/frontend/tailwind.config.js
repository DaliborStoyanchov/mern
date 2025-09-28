/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        secondary: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#FFCE1A",
        secondary: "#0d0842",
        bg: "#F3F3F3",
        favorite: "#FF5841",
      },
    },
  },
  plugins: [],
};
