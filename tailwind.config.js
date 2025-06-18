/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earth tones
        earth: {
          50: '#f5f3f0',
          100: '#e8e2d9',
          200: '#d2c5b4',
          300: '#bba78e',
          400: '#a58a6f',
          500: '#8e7255',
          600: '#735c45',
          700: '#5a4736',
          800: '#423327',
          900: '#2b2019',
          950: '#171009',
        },
        // Cosmic gradients base colors
        cosmic: {
          50: '#f0f1ff',
          100: '#e2e5ff',
          200: '#c7ccff',
          300: '#a9a6ff',
          400: '#8b7aff',
          500: '#7a4dff',
          600: '#6e2dff',
          700: '#5e1df5',
          800: '#4d19d1',
          900: '#3f17a8',
          950: '#250c6c',
        },
        // Chakra-inspired accent colors
        chakra: {
          root: '#ff5252',      // Root chakra - Red
          sacral: '#ff9800',    // Sacral chakra - Orange
          solar: '#ffeb3b',     // Solar Plexus - Yellow
          heart: '#4caf50',     // Heart chakra - Green
          throat: '#03a9f4',    // Throat chakra - Blue
          third: '#673ab7',     // Third Eye - Indigo
          crown: '#9c27b0',     // Crown chakra - Purple
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        sanskrit: ['var(--font-sanskrit)'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "glow-pulse": {
          "0%, 100%": { 
            opacity: 1,
            filter: "brightness(1) blur(0px)"
          },
          "50%": { 
            opacity: 0.8,
            filter: "brightness(1.2) blur(1px)"
          },
        },
        "flow-line": {
          "0%": { 
            backgroundPosition: "0% 50%",
          },
          "100%": { 
            backgroundPosition: "100% 50%",
          },
        },
        "chakra-spin": {
          "0%": { 
            transform: "rotate(0deg)",
            opacity: 0.7,
          },
          "100%": { 
            transform: "rotate(360deg)",
            opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "flow-line": "flow-line 3s linear infinite",
        "chakra-spin": "chakra-spin 8s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}