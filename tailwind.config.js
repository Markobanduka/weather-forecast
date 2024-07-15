/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#f1c40f",
        danger: "#e74c3c",
        "light-blue": "#add8e6",
      },
      spacing: {
        12: "3rem",
        24: "6rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-bottom": "linear-gradient(to bottom, white, #add8e6)",
      },
    },
  },

  plugins: [require("daisyui")],
};
