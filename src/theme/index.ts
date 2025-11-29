import { extendTheme, ThemeConfig, type ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 1. Color Mode Configuration
const config: ThemeConfig = {
  initialColorMode: 'system', // Respect OS setting initially
  useSystemColorMode: true,
};

// Custom Colors based on AI_CONTEXT.md
const colors = {
  brand: {
    // Primary: Indigo (light: 500, dark: 300)
    primary: {
      500: '#6366f1', // light mode indigo
      300: '#a5b4fc', // dark mode indigo (lighter for contrast)
    },
    // Accent: Pink (light: 400, dark: 600)
    accent: {
      400: '#f472b6', // light mode pink
      600: '#db2777', // dark mode pink (darker for contrast)
    },
    // Secondary/Highlight: Teal (light: 400, dark: 500)
    secondary: {
      400: '#2dd4bf', 
      500: '#14b8a6', 
    },
  },
  // Overriding standard colors for background and text
  gray: {
    // Backgrounds
    50: '#f8fafc', // Light BG (Slate 50)
    900: '#0B0E14', // Dark BG (Deep Navy/Ink)
  },
  // Custom neon for visual effects
  neon: {
    indigo: '#a5b4fc', 
    pink: '#f472b6',
    teal: '#2dd4bf',
  }
};

const fonts = {
  body: `"Inter", sans-serif`,
  heading: `"Space Grotesk", sans-serif`,
  mono: `"JetBrains Mono", monospace`,
};

// Global styles to handle background color
const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode('gray.50', 'gray.900')(props), // Slate 50 or Deep Navy/Ink
      color: mode('gray.900', 'gray.50')(props),
    },
  }),
};

// 3. Component Overrides (e.g., for MDX content consistency)
const components = {
  Heading: {
    baseStyle: {
      fontFamily: `"Space Grotesk", sans-serif`,
    },
  },
  Text: {
    baseStyle: {
        fontFamily: `"Inter", sans-serif`,
    }
  },
  Link: {
    baseStyle: (props: Record<string, any>) => ({
      color: mode('brand.primary.500', 'brand.primary.300')(props),
      _hover: {
        textDecoration: 'none',
        color: mode('brand.accent.400', 'brand.accent.600')(props),
      },
    }),
  },
};


export const theme: ThemeOverride = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
});

export default theme;