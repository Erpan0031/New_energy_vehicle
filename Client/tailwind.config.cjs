/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: {
        toTop: "toTop 1s ease-in-out infinite",
        toBot: "toBot 1s ease-in-out 1",
        lefttoright: "lefttoright 1s ease-in-out 1",
        toBotslow: "toBot 0.5s ease-in-out 1",
        zoomInAndOut: "zoomInAndOut 0.2s ease-in-out "
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
        lefttoright: {
          "0%": {
            opacity: "0",
            transform: "translateX(-200px)"

          },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        zoomInAndOut: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.2)" },
        }
      },
    },
  },
  plugins: [],
};
