'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Provider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/theme/index';

interface ChakraProviderProps {
  children: React.ReactNode;
}

// Custom ChakraProvider component wrapping the necessary providers
export function ChakraProvider({ children }: ChakraProviderProps) {
  return (
    <CacheProvider>
      {/* 
        Inject the color mode script early in the render process 
        to prevent flash of unstyled content (FOUC). 
      */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider theme={theme}>
        {children}
      </Provider>
    </CacheProvider>
  );
}