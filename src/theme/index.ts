import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark' as const,
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: 'var(--font-inter)',
    heading: 'var(--font-space-grotesk)',
    mono: 'var(--font-jetbrains-mono)',
  },
  colors: {
    // Primary: Indigo
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    // Accent: Pink
    accent: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    // Secondary: Teal
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    // Neon glows
    neon: {
      indigo: '#a5b4fc',
      pink: '#f472b6',
      teal: '#2dd4bf',
    },
    // Brand aliases for backward compatibility
    brand: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      accent: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      secondary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0B0E14' : 'slate.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
        fontFamily: 'body',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
      '*::selection': {
        bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
        color: props.colorMode === 'dark' ? 'gray.900' : 'white',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        primary: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
          color: props.colorMode === 'dark' ? 'gray.900' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.600',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark' 
              ? '0 0 20px rgba(165, 180, 252, 0.6)' 
              : '0 4px 12px rgba(99, 102, 241, 0.4)',
          },
          transition: 'all 0.3s ease',
        }),
        accent: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'accent.600' : 'accent.400',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.700' : 'accent.500',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 0 20px rgba(244, 114, 182, 0.6)'
              : '0 4px 12px rgba(244, 114, 182, 0.4)',
          },
          transition: 'all 0.3s ease',
        }),
        ghost: {
          _hover: {
            bg: 'whiteAlpha.200',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'primary.300' : 'primary.600',
        _hover: {
          textDecoration: 'underline',
          color: props.colorMode === 'dark' ? 'primary.400' : 'primary.700',
        },
      }),
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'whiteAlpha.50' : 'white',
          borderRadius: 'xl',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 30px rgba(165, 180, 252, 0.2)'
              : '0 8px 30px rgba(0, 0, 0, 0.1)',
          },
        },
      }),
    },
  },
  semanticTokens: {
    colors: {
      'chakra-body-bg': {
        _light: 'slate.50',
        _dark: '#0B0E14',
      },
      'chakra-body-text': {
        _light: 'gray.900',
        _dark: 'gray.100',
      },
    },
  },
});