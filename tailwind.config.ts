import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",

        /* WUR nature colour tokens */
        nature: {
          forest:   "#3d9040",   /* primary leaf green  */
          leaf:     "#5cb85e",   /* lighter spring leaf */
          sage:     "#7a9078",   /* sage muted          */
          moss:     "#1a2c1a",   /* dark moss panel     */
          earth:    "#b87c1e",   /* warm earth amber    */
          "earth-light": "#d49a3a",
          bark:     "#7a5010",   /* deep bark brown     */
          soil:     "#0d1a0c",   /* deep soil / bg      */
        },

        /* Keep "gold" alias pointing to earth-amber for backwards compat */
        gold: {
          DEFAULT: "#b87c1e",
          light:   "#d49a3a",
          dark:    "#7a5010",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0"  },
        },
        "pulse-nature": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(61, 144, 64, 0.4)" },
          "50%":      { boxShadow: "0 0 0 6px rgba(61, 144, 64, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        shimmer:          "shimmer 2s infinite linear",
        "pulse-nature":   "pulse-nature 2s infinite",
      },
      backgroundImage: {
        shimmer:
          "linear-gradient(90deg, transparent 0%, rgba(61,144,64,0.08) 50%, transparent 100%)",
        "nature-gradient":
          "linear-gradient(135deg, #72c474 0%, #3d9040 55%, #1e5921 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
