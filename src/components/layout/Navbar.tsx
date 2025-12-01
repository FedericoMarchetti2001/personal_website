'use client';

import { Box, Container, Flex, Button, IconButton, Link as ChakraLink, useColorMode, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={colorMode === 'dark' ? 'rgba(11, 14, 20, 0.8)' : 'rgba(248, 250, 252, 0.8)'}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' } as any}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <ChakraLink
            as={Link}
            href="/"
            fontSize="2xl"
            fontFamily="heading"
            fontWeight="bold"
            bgGradient="linear(to-r, primary.500, accent.500)"
            bgClip="text"
            _hover={{ textDecoration: 'none' }}
          >
            FM
          </ChakraLink>

          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={6} align="center">
            {navLinks.map((link) => (
              <ChakraLink
                key={link.href}
                as={Link}
                href={link.href}
                position="relative"
                fontWeight={isActive(link.href) ? 'bold' : 'medium'}
                color={isActive(link.href) ? 'primary.500' : 'inherit'}
                _hover={{
                  color: 'primary.500',
                  textDecoration: 'none',
                }}
                _after={
                  isActive(link.href)
                    ? {
                        content: '""',
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                          height: '2px',
                          bg: 'primary.500',
                          borderRadius: 'full',
                        }
                      : undefined
                  }
                >
                  {link.name}
                </ChakraLink>
            ))}

            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
            />
          </Flex>

          {/* Mobile Menu Button */}
          <Flex display={{ base: 'flex', md: 'none' }} gap={2}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
            />
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              size="md"
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  fontSize="xl"
                  fontWeight={isActive(link.href) ? 'bold' : 'medium'}
                  color={isActive(link.href) ? 'primary.500' : 'inherit'}
                  onClick={onClose}
                  _hover={{
                    color: 'primary.500',
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
}
