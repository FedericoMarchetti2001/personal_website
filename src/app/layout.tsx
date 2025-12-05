import type { Metadata } from 'next';
import Script from 'next/script';
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

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Federico Marchetti',
  url: 'https://federicomarchetti.dev',
  author: {
    '@type': 'Person',
    name: 'Federico Marchetti',
    url: 'https://federicomarchetti.dev',
  },
};

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Federico Marchetti',
  url: 'https://federicomarchetti.dev',
  jobTitle: 'Full-Stack Developer',
  sameAs: [
    'https://www.linkedin.com/in/federicopmarchetti',
    'https://github.com/federicomarchetti',
  ],
};


export const metadata: Metadata = {
  metadataBase: new URL('https://federicomarchetti.dev'),
  title: {
    default: 'Federico Marchetti | Full-Stack Developer',
    template: '%s | Federico Marchetti',
  },
  description: 'Full-Stack Developer specializing in React, .NET, and Azure. Explore projects, blog posts, and my resume.',
  keywords: ['Federico Marchetti', 'Full-Stack Developer', 'React', '.NET', 'Azure', 'Portfolio'],
  authors: [{ name: 'Federico Marchetti' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://federicomarchetti.dev',
    siteName: 'Federico Marchetti',
    title: 'Federico Marchetti | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, .NET, and Azure. Explore projects, blog posts, and my resume.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federico Marchetti | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, .NET, and Azure. Explore projects, blog posts, and my resume.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${InterFont.variable} ${SpaceGroteskFont.variable} ${JetBrainsMonoFont.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="ld-site"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([siteStructuredData, personStructuredData]) }}
        />
      </head>
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
