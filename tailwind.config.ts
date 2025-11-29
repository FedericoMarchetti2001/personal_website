import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  // Use 'important: true' to ensure Tailwind utility classes override Chakra styles
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body: Inter
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        // Headings: Space Grotesk
        heading: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        // Code: JetBrains Mono
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Core Palette (Chakra names map to Tailwind)
        primary: {
          500: '#6366f1', // Indigo 500 (light mode)
          300: '#a5b4fc', // Indigo 300 (dark mode target)
        },
        accent: {
          400: '#f472b6', // Pink 400 (light mode)
          600: '#db2777', // Pink 600 (dark mode target)
        },
        secondary: {
          400: '#2dd4bf', // Teal 400 (light mode)
          500: '#14b8a6', // Teal 500 (dark mode target)
        },
        // Background colors
        'bg-light': '#f8fafc', // Slate 50
        'bg-dark': '#0B0E14', // Deep Navy/Ink
        // Neon Glows (using standard colors for Tailwind utilities, but custom names for clarity)
        'neon-indigo': '#a5b4fc', // A lighter indigo for glow effect
        'neon-pink': '#f472b6',
        'cyan-teal': '#2dd4bf',
      },
      boxShadow: {
        'glow-indigo': '0 0 10px rgba(165, 180, 252, 0.5), 0 0 20px rgba(165, 180, 252, 0.3)',
        'glow-pink': '0 0 10px rgba(244, 114, 182, 0.6), 0 0 20px rgba(244, 114, 182, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;