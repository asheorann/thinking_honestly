import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        heading: "var(--color-heading)",
        body: "var(--color-body)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        "serif-display": ["DM Serif Display", "serif"],
        "hind": ["var(--font-hind)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
