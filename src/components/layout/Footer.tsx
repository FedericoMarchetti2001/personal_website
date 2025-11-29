'use client';

import { Box, Container, Flex, Text, Link as ChakraLink, VStack, HStack, Icon, Divider, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/federicomarchetti',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/federicomarchetti',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:federico.marchetti@example.com',
  },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const { colorMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      mt={20}
      py={12}
      borderTop="1px solid"
      borderColor={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
      bg={colorMode === 'dark' ? 'rgba(11, 14, 20, 0.5)' : 'rgba(248, 250, 252, 0.5)'}
    >
      <Container maxW="container.xl">
        <VStack spacing={8}>
          {/* Links */}
          <HStack spacing={8} flexWrap="wrap" justify="center">
            {footerLinks.map((link) => (
              <ChakraLink
                key={link.href}
                as={Link}
                href={link.href}
                fontSize="sm"
                color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                _hover={{
                  color: 'primary.500',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>

          <Divider />

          {/* Social Links */}
          <HStack spacing={6}>
            {socialLinks.map((social) => (
              <ChakraLink
                key={social.name}
                href={social.href}
                isExternal
                aria-label={social.name}
                _hover={{
                  transform: 'translateY(-4px)',
                  color: 'primary.500',
                }}

              >
                <Icon as={social.icon} boxSize={6} />
              </ChakraLink>
            ))}
          </HStack>

          {/* Copyright */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            gap={2}
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.500' : 'gray.600'}
          >
            <Text>© {currentYear} Federico Marchetti. All rights reserved.</Text>
            <Flex align="center" gap={1}>
              <Text>Built with</Text>
              <Icon as={FaHeart} color="accent.500" boxSize={3} />
              <Text>using Next.js, React Three Fiber & Chakra UI</Text>
            </Flex>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
