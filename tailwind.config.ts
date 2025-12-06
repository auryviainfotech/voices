import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        magenta: {
          primary: "var(--magenta-primary)",
        },
        violet: {
          secondary: "var(--violet-secondary)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'magenta-violet': 'var(--magenta-violet-gradient)',
        'magenta-violet-hover': 'var(--magenta-violet-gradient-hover)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      }
    },
  },
  plugins: [],
};

export default config;
