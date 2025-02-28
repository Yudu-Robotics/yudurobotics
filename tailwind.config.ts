import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";

// Create a type for the flattenColorPalette function
type ColorPalette = { [key: string]: string | ColorPalette };
// type FlatColorPalette = { [key: string]: string };

// Import flattenColorPalette dynamically
// @ts-expect-error - No type definitions available
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// Define more specific types for the plugin utilities
type UtilityConfig = {
  addBase: (config: Record<string, Record<string, string>>) => void;
  theme: (path: string) => ColorPalette;
};

type MatchUtilitiesConfig = {
  matchUtilities: (
    utilities: Record<string, (value: string) => Record<string, string>>,
    config: { values: Record<string, string>; type: string }
  ) => void;
  theme: (path: string) => ColorPalette;
};

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
        // Ignore spelling for custom font names
        /* cspell:disable */
        piepie: ["PiePie", "sans-serif"],
        cobaltRidge: ["var(--font-cobalt)", "sans-serif"],
        tthoves: ["var(--font-tthoves-regular)", "sans-serif"],
        "tthoves-bold": ["var(--font-tthoves-bold)", "sans-serif"],
        "tthoves-semiBold": ["var(--font-tthoves-demibold)", "sans-serif"],
        "tthoves-medium": ["var(--font-tthoves-medium)", "sans-serif"],
        /* cspell:enable */
      },
      fontSize: {
        // cspell:disable-next-line
        md: "var(--Fontsizetext-md)",
      },
      lineHeight: {
        // cspell:disable-next-line
        md: "var(--Lineheighttext-md)",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "grid-black":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "grid-white":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    ({ matchUtilities, theme }: MatchUtilitiesConfig) => {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="${value}"><path d="M0 .5H63.5V64"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="${value}"><path d="M0 .5H15.5V16"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  // Ignore spelling for custom class names
  /* cspell:disable */
  safelist: ["peecee", "roboki", "zing", "crawl-e", "klaw-b", "plode"],
  /* cspell:enable */
};

function addVariablesForColors({ addBase, theme }: UtilityConfig) {
  const allColors = flattenColorPalette(theme("colors")) as Record<
    string,
    string
  >;
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
