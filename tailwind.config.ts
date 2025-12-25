import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{mdx}"],
  theme: {
    extend: {
      colors: {
        evergreen: {
          50: "#f4f7f4",
          100: "#e2ebe4",
          200: "#c5d8c8",
          300: "#9ebc9f",
          400: "#6f986f",
          500: "#4f7b52",
          600: "#3a6040",
          700: "#2e4c34",
          800: "#263d2c",
          900: "#213324"
        },
        parchment: {
          50: "#faf8f2",
          100: "#f4efe2",
          200: "#e6dcc1",
          300: "#d3c098",
          400: "#bfa46f",
          500: "#a98a4f",
          600: "#8a6d3d",
          700: "#6e5430",
          800: "#594429",
          900: "#4a3824"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
