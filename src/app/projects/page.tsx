'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Image, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { allSortedProjects } from '@/lib/contentlayer';
import { staggerContainer, staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function ProjectsPage() {
  const projects = allSortedProjects();

  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12}>
        <Container maxW="container.xl">
          <MotionVStack
            spacing={12}
            align="stretch"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <MotionVStack spacing={4} textAlign="center" variants={staggerItem}>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontFamily="heading"
                bgGradient="linear(to-r, primary.500, accent.500)"
                bgClip="text"
              >
                Projects
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.500"
                maxW="2xl"
              >
                A collection of projects showcasing my work in web development
              </Text>
            </MotionVStack>

            {/* Projects Grid */}
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={8}
            >
              {projects.map((project, index) => (
                <Link key={project.slug} href={project.url} style={{ textDecoration: 'none' }}>
                  <MotionBox
                    variants={staggerItem}
                    custom={index * 0.1}
                    bg="whiteAlpha.50"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="whiteAlpha.100"
                    overflow="hidden"
                    cursor="pointer"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(165, 180, 252, 0.2)',
                      borderColor: 'primary.500',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Cover Image */}
                    {project.coverImage && (
                      <Box position="relative" h="200px" overflow="hidden">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                      </Box>
                    )}

                    {/* Content */}
                    <VStack align="start" spacing={4} p={6}>
                      <HStack justify="space-between" w="full">
                        <Badge colorScheme="purple" fontSize="xs" px={2} py={1} borderRadius="md">
                          {project.year}
                        </Badge>
                        <HStack spacing={2}>
                          {project.github && (
                            <ChakraLink href={project.github} isExternal onClick={(e) => e.stopPropagation()}>
                              <Icon as={FaGithub} boxSize={4} color="gray.400" _hover={{ color: 'primary.500' }} />
                            </ChakraLink>
                          )}
                          {project.link && (
                            <ChakraLink href={project.link} isExternal onClick={(e) => e.stopPropagation()}>
                              <Icon as={FaExternalLinkAlt} boxSize={4} color="gray.400" _hover={{ color: 'primary.500' }} />
                            </ChakraLink>
                          )}
                        </HStack>
                      </HStack>

                      <Heading
                        as="h2"
                        size="md"
                        fontFamily="heading"
                        noOfLines={2}
                      >
                        {project.title}
                      </Heading>

                      <Text
                        fontSize="sm"
                        color="gray.400"
                        noOfLines={3}
                      >
                        {project.summary}
                      </Text>

                      <HStack wrap="wrap" spacing={2}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            colorScheme="teal"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            colorScheme="gray"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </HStack>
                    </VStack>
                  </MotionBox>
                </Link>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
