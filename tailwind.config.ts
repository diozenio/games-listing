import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      accent: "#E54666",
      dark: {
        900: "#121113",
        800: "#1C2024",
        700: "#3E4247",
        600: "#5F6469",
        500: "#8F8995",
        400: "#DBDFE3",
        300: "#EEEEF0",
        200: "#FFFFFF",
      },
    },
    extend: {
      backgroundImage: {
        pageBackground: "./public/pageBackground.svg",
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
};
export default config;
