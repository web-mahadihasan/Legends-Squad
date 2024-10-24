/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#131313",
        "secondary-color": "rgba(19, 19, 19, 0.7)",
      },
    },
  },
  plugins: [require("daisyui")],
};

