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
      screens: {
        xs: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        heading: "Poppins",
        body: ["TTHovesRegular", "sans-serif"],
        piepie: ["PiePie", "sans-serif"],
        tthoves: ["TTHovesRegular", "sans-serif"],
        "tthoves-bold": ["TTHovesBold", "sans-serif"],
        "tthoves-semiBold": ["TTHovesDemiBold", "sans-serif"],
        "tthoves-medium": ["TTHovesMedium", "sans-serif"]
      },
      fontSize: {
        md: "var(--Fontsizetext-md)", // Custom font size for medium text
      },
      lineHeight: {
        md: "var(--Lineheighttext-md)", // Custom line height for medium text
      },
      colors: {
        customBlue: "#3f00ff",
        customWhite: "#ffffff",
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
          ver: "hsl(var(--primary-ver))",
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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xlg: "3.8rem",
        xxl: "5.8rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-scroll": "loop-scroll 15s linear infinite",
        "mobile-scroll": "mobile-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-70%)" },
        },
        "mobile-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-500%)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
    safelist: ["peecee", "roboki", "zing", "crawl-e", "klaw-b", "plode"],
  },
};

export default config;
