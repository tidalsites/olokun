import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft .7s linear 1.2s forwards",
        slideLeftDelay: "slideLeft .7s linear 1.5s forwards",
        slideBorderRight: "slideRight .7s linear 1.2s forwards",
        slideBorderRightDelay: "slideRight .7s linear 1.5s forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        brand: "#bf0000",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
