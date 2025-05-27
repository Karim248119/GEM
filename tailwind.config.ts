import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D0CABF",
        secondary: "#A67C00",
        accent: "#fff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "translateY(10px)", opacity: "0" },
          "50%": { transform: "translateY(-5px)", opacity: "1" }, // increase to -30px or more for higher bounce
        },
      },
      animation: {
        customBounce: "customBounce 2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
