// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Crimson Pro",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        pumpkin: "#FF7518",
        burnt: "#D28600",
        tangerine: "#F28500",
        golden: "#FFB347",
        cerulean: "#1E54A9",
        curiousblue: "#0FA289",
        achelous: "#FFAB18",
        lbrown: "#fff7f2",
        seablue: "#046E94",
        rhythm: "#70739E",
        midnightgreen: "#155263",
        gainsboro: "#D6E4E5",
        floralwhite: "#FFFCFF",
        teagreen: "#D2EBCD",
        Mountbatten: "#97709D",
        dullblue: "#f5fcff",
      },
      backgroundImage: {
        "gradient-autumn": `
          linear-gradient(217deg, rgb(112 115 158 / 80%), rgb(210 235 205 / 0%) 70.71%),
          linear-gradient(127deg, rgb(255 252 255 / 80%), rgb(255 252 255 / 0%) 70.71%),
          linear-gradient(336deg, rgb(210 235 205 / 80%), rgb(151 112 157 / 0%) 70.71%),
          linear-gradient(45deg, rgb(151 112 157 / 80%), rgb(151 112 157 / 0%) 70.71%)
          `,
      },
      keyframes: {
        "move-gradient": {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          "100%": { "background-position": "0% 0%" },
        },
      },
      animation: {
        "move-gradient": "move-gradient 2s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
