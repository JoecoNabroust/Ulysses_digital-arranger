import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./context/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F9F8F3",
        charcoal: "#1A1A1A",
        oxford: "#002147"
      }
    }
  },
  plugins: []
};

export default config;
