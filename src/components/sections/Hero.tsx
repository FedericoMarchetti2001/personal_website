'use client';

import { Box, Container, Heading, Text, Button, VStack, HStack, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DownloadIcon } from '@chakra-ui/icons';
import R3FCanvas from '@/components/three/R3FCanvas';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

export default function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      {/* 3D Background */}
      <R3FCanvas />

      {/* Overlay for better text visibility */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={colorMode === 'dark' ? 'rgba(11, 14, 20, 0.7)' : 'rgba(248, 250, 252, 0.7)'}
        zIndex={1}
      />

      {/* Content */}
      <Container maxW="container.xl" position="relative" zIndex={2} py={20}>
        <MotionVStack
          spacing={6}
          align="center"
          textAlign="center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {/* Greeting */}
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="medium"
            color="primary.500"
            variants={staggerItem}
          >
            Hi, I'm
          </MotionText>

          {/* Name */}
          <MotionHeading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontFamily="heading"
            fontWeight="bold"
            bgGradient="linear(to-r, primary.500, accent.500, secondary.500)"
            bgClip="text"
            variants={staggerItem}
          >
            Federico Marchetti
          </MotionHeading>

          {/* Subtitle */}
          <MotionText
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight="medium"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}
            maxW="3xl"
            variants={staggerItem}
          >
            Full-Stack Developer • React • .NET • Azure
          </MotionText>

          {/* Description */}
          <MotionText
            fontSize={{ base: 'md', md: 'lg' }}
            color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
            maxW="2xl"
            variants={staggerItem}
          >
            I build modern, scalable web applications with beautiful user experiences.
            Passionate about clean code, cloud architecture, and continuous learning.
          </MotionText>

          {/* CTA Buttons */}
          <MotionBox variants={staggerItem} mt={4}>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href="/projects"
                size="lg"
                variant="primary"
                fontSize="md"
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: colorMode === 'dark'
                    ? '0 0 20px rgba(165, 180, 252, 0.6)'
                    : '0 4px 12px rgba(99, 102, 241, 0.4)',
                }}

              >
                View Projects
              </Button>

              <Button
                as={Link}
                href="/blog"
                size="lg"
                variant="accent"
                fontSize="md"
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: colorMode === 'dark'
                    ? '0 0 20px rgba(244, 114, 182, 0.6)'
                    : '0 4px 12px rgba(244, 114, 182, 0.4)',
                }}

              >
                Read Blog
              </Button>

              <Button
                as="a"
                href="/Federico_Marchetti_Resume.pdf"
                download
                size="lg"
                variant="ghost"
                fontSize="md"
                px={8}
                leftIcon={<DownloadIcon />}
                borderWidth="2px"
                borderColor={colorMode === 'dark' ? 'primary.300' : 'primary.500'}
                color={colorMode === 'dark' ? 'primary.300' : 'primary.500'}
                _hover={{
                  bg: colorMode === 'dark' ? 'primary.900' : 'primary.50',
                  transform: 'translateY(-2px)',
                }}

              >
                Download Resume
              </Button>
            </HStack>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            mt={12}
            variants={fadeIn}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            } as any}
          >
            <Text
              fontSize="sm"
              color={colorMode === 'dark' ? 'gray.500' : 'gray.600'}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Box
                as="span"
                w="1px"
                h="40px"
                bg={colorMode === 'dark' ? 'gray.600' : 'gray.400'}
              />
              Scroll to explore
            </Text>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
}
