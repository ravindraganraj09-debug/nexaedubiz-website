import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "nexa-bg": "#070B1A",
        "nexa-slate": "#0F172A"
      },
      backgroundImage: {
        "nexa-gradient":
          "radial-gradient(circle at 5% 20%, rgba(0, 153, 255, 0.25), transparent 40%), radial-gradient(circle at 95% 10%, rgba(140, 82, 255, 0.24), transparent 38%), radial-gradient(circle at 70% 80%, rgba(0, 229, 255, 0.2), transparent 35%)"
      },
      boxShadow: {
        glass: "0 20px 50px rgba(14, 116, 255, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
