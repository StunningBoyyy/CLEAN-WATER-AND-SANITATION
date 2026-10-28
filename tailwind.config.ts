import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#14374F",
          50: "#F0F5F8",
          100: "#DDE9F0",
          200: "#B8D2E1",
          300: "#8CB5CD",
          400: "#5D95B6",
          500: "#38789E",
          600: "#275C7C",
          700: "#1E4A64",
          800: "#14374F",
          900: "#0C2333",
          950: "#06131C",
        },
        water: {
          DEFAULT: "#2A88CF",
          light: "#E1F2FB",
          50: "#F0F8FD",
          100: "#E1F2FB",
          200: "#B9E0F6",
          300: "#80C5EF",
          400: "#48A6E6",
          500: "#2A88CF",
          600: "#186BAA",
          700: "#145588",
          800: "#144870",
          900: "#153D5D",
        },
        teal: {
          DEFAULT: "#279985",
          50: "#EFF9F7",
          100: "#D6F1EB",
          200: "#AEE2D7",
          300: "#7DCFBF",
          400: "#4DB8A4",
          500: "#279985",
          600: "#1E7B6C",
          700: "#1B6257",
          800: "#194E46",
          900: "#18423B",
        },
        sdggreen: {
          DEFAULT: "#67A74B",
          50: "#F4F9F1",
          100: "#E6F3E0",
          200: "#CFE7C3",
          300: "#AFD69E",
          400: "#8BC174",
          500: "#67A74B",
          600: "#4E8636",
          700: "#3D692C",
          800: "#345427",
          900: "#2D4723",
        },
        aqua: {
          DEFAULT: "#ECF7F8",
          light: "#F7FCFC",
        },
        panel: {
          DEFAULT: "#DDF0F9",
          dark: "#14374F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        water: "0 10px 30px -10px rgba(42, 136, 207, 0.15)",
        "water-lg": "0 20px 40px -15px rgba(42, 136, 207, 0.25)",
      },
      keyframes: {
        "wave-pulse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "wave-pulse": "wave-pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
