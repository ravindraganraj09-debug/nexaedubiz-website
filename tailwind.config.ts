import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "nexa-bg": "#05060F",
        "nexa-deep": "#070B1A",
        "nexa-slate": "#0F172A",
        "nexa-violet": "#7C3AED",
        "nexa-cyan": "#22D3EE",
        "nexa-blue": "#3B82F6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "nexa-gradient":
          "radial-gradient(circle at 5% 18%, rgba(59, 130, 246, 0.28), transparent 42%), radial-gradient(circle at 92% 8%, rgba(168, 85, 247, 0.26), transparent 40%), radial-gradient(circle at 70% 88%, rgba(34, 211, 238, 0.22), transparent 38%), radial-gradient(circle at 18% 90%, rgba(99, 102, 241, 0.18), transparent 42%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,6,15,0.92) 90%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "shine":
          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(14, 116, 255, 0.18)",
        "glow-cyan": "0 0 60px rgba(34, 211, 238, 0.45)",
        "glow-violet": "0 0 60px rgba(139, 92, 246, 0.45)",
        "card-hover": "0 30px 80px rgba(76, 29, 149, 0.35)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
