'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaPalette, FaRocket } from 'react-icons/fa';
import { slideUp, staggerContainer, staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const skills = [
  {
    icon: FaCode,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs with React, Next.js, TypeScript, and modern CSS frameworks.',
  },
  {
    icon: FaCloud,
    title: 'Backend & Cloud',
    description: 'Developing scalable APIs with .NET Core and deploying to Azure cloud infrastructure.',
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, accessible interfaces with attention to detail and user experience.',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description: 'Optimizing applications for speed, SEO, and scalability with best practices.',
  },
];

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Box py={20} position="relative">
      <Container maxW="container.xl">
        <MotionVStack
          spacing={16}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <MotionVStack spacing={4} textAlign="center" variants={staggerItem}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontFamily="heading"
              bgGradient="linear(to-r, primary.500, accent.500)"
              bgClip="text"
            >
              What I Do
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
              maxW="2xl"
            >
              Crafting digital experiences with modern technologies and best practices
            </Text>
          </MotionVStack>

          {/* Skills Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={8}
            w="full"
          >
            {skills.map((skill, index) => (
              <MotionBox
                key={skill.title}
                variants={staggerItem}
                custom={index * 0.1}
                p={6}
                bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'white'}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}

                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: colorMode === 'dark'
                    ? '0 8px 30px rgba(165, 180, 252, 0.2)'
                    : '0 8px 30px rgba(0, 0, 0, 0.1)',
                  borderColor: 'primary.500',
                }}
              >
                <VStack align="start" spacing={4}>
                  <Icon
                    as={skill.icon}
                    boxSize={10}
                    color="primary.500"
                  />
                  <Heading
                    as="h3"
                    size="md"
                    fontFamily="heading"
                  >
                    {skill.title}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                  >
                    {skill.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionVStack>
      </Container>
    </Box>
  );
}
