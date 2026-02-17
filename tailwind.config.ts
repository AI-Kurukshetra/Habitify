import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2a67f4",
          fg: "#fff",
        },
        fg: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
        card: "#ffffff",
        bg: "#f8fafc",
        danger: {
          DEFAULT: "#dc2626",
          fg: "#fff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)",
        lift: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
