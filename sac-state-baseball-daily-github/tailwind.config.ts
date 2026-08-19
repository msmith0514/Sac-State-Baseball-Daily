import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hornet: {
          950: "#0b2a21",
          900: "#103d2f",
          800: "#15513e",
          700: "#1d6650",
          100: "#dce9e3"
        },
        gold: {
          500: "#c9a349",
          300: "#e5cb8a"
        },
        cream: "#f5f3ed",
        ink: "#15201c"
      },
      boxShadow: {
        card: "0 12px 34px rgba(16, 61, 47, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
export default config;
