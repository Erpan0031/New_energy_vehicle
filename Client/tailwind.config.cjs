/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: {
        toTop: "toTop 1s ease-in-out infinite",
        toBot: "toBot 1s ease-in-out 1",
        toBotslow: "toBot 0.5s ease-in-out 1",
      },
      keyframes: {
        toTop: {
          "0%": { marginTop: "0px" },
          "100%": { marginTop: "-2.5rem" },
        },
        toBot: {
          "0%": { marginTop: "-2.5rem" },
          "100%": { marginTop: "0rem" },
        },
      },
    },
  },
  plugins: [],
};
