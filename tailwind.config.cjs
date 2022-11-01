/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSan: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
      },
      width: {
        sidebar: "16rem",
      },
      height: {
        header: "4rem",
      },
      colors: {
        primary: "#000",
        primaryLight: "#ffd95b",
        primaryDark: "#c77800",
        background: "#fafafa",
        backgroundLight: "#f5f5f5",
        backgroundDark: "#8d8d8d",
        available: "#29b6f6",
        occupied: "#ffa000",
        unavailable: "#e53935",
      },
    },
  },
  plugins: [],
};
