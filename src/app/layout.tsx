import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@/components/ChakraProvider';
import '../styles/globals.css';

// Initialize Custom Fonts (Local variable name must match the name used in src/theme/index.ts)
const InterFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const SpaceGroteskFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
});

const JetBrainsMonoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});


export const metadata: Metadata = {
  title: 'Federico Marchetti | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, .NET, and Azure. Explore projects, blog posts, and my resume.',
  keywords: ['Federico Marchetti', 'Full-Stack Developer', 'React', '.NET', 'Azure', 'Portfolio'],
  authors: [{ name: 'Federico Marchetti' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${InterFont.variable} ${SpaceGroteskFont.variable} ${JetBrainsMonoFont.variable}`}>
      <body suppressHydrationWarning={true}>
        <ChakraProvider>
          {/* Main content box. Tailwind's body/html classes in globals.css handle font setting and full height. */}
          <Box as="main" minH="100vh">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}