/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moving: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-700px)" },
        },

        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(90deg)",
          },
        },

        rotatereverse: {
          from: {
            transform: "rotate(90deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        moving: "moving 30s linear infinite",
        rotate: "rotate 0.5s linear",
        rotatereverse: "rotatereverse 0.3s linear",
      },
    },
  },
  plugins: [],
};
