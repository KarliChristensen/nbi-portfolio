const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {},
      colors: {
        newOrange: "#fc6e44",
        newYellow: "#f2c064",
        newBeige: "#f4ece0",
        newLightBlue: "#ccdcf6",
        newBlue: "#4684e9",
      },
      backgroundImage: {},
      rotate: {
        350: "350deg",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

/* 

orange hex fc6e44
gul f2c064
beige f4ece0
lys blå ccdcf6
blå blå 4684e9

*/
