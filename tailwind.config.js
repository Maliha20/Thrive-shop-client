/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "linear-gradient(40deg,#bfdbfe, #93c5fd, #bfdbfe)",
          foreground: "linear-gradient(40deg,#bfdbfe, #93c5fd, #bfdbfe)",
        },
        secondary: {
          DEFAULT:  "linear-gradient(30deg, #8567AD, #961EEA)",
          foreground: "linear-gradient(30deg, #8567AD, #961EEA)",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'fade-in-zoom': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-out-zoom': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'accordion-down': {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' },
        },
      },
      animation: {
        'fade-in-zoom': 'fade-in-zoom 0.3s ease-out',
        'fade-out-zoom': 'fade-out-zoom 0.3s ease-in',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{
        "primary-gradient": "linear-gradient(40deg,#bfdbfe, #93c5fd, #bfdbfe)",
        "secondary-gradient": "linear-gradient(30deg, #D0F0C0, #93C572)",
        "danger-gradient": "linear-gradient(30deg, #FDBCB4, #E23D28)",
        "warning-gradient": "linear-gradient(30deg, #FFFDD0, #EEDC82)",
        "notification":"linear-gradient(30deg, #8093f1, #8093f1)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
