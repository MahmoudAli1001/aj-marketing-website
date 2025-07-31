import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#ffffff",
        foreground: "#333333",
        primary: {
          DEFAULT: "#36a1d7",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#66b19e",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#8bbb4c",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#f9f9f9",
          foreground: "#666666",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#333333",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#333333",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        tajawal: ["var(--font-tajawal)"],
      },
    },
  },
  plugins: [],
}
export default config
