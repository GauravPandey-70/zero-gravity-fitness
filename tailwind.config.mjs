/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        "on-background": "#e5e2e1",
        "on-surface-variant": "#baccb0",
        surface: {
          DEFAULT: "#131313",
          bright: "#3a3939",
          dim: "#131313",
          container: {
            lowest: "#0e0e0e",
            low: "#1c1b1b",
            DEFAULT: "#201f1f",
            high: "#2a2a2a",
            highest: "#353534",
          },
        },
        primary: {
          DEFAULT: "#39FF14", // Neon Green
          container: "#107100",
          fixed: "#79ff5b",
        },
        secondary: {
          DEFAULT: "#BC13FE", // Vibrant Purple
          container: "#b600f8",
          fixed: "#ebb2ff",
        },
        tertiary: {
          DEFAULT: "#00F5FF", // Cyan
          container: "#006c71",
          fixed: "#63f7ff",
        },
        outline: {
          DEFAULT: "#85967c",
          variant: "#3c4b35",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        'md': '0.375rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
