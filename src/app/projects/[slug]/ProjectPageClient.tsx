'use client';

import { Box, Container, Heading, Text, VStack, HStack, Badge, Image, Button, Icon } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdxRenderer } from '@/lib/mdx';
import type { Project } from 'contentlayer/generated';

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            {/* Cover Image */}
            {project.coverImage && (
              <Box borderRadius="xl" overflow="hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  w="full"
                  h="400px"
                  objectFit="cover"
                />
              </Box>
            )}

            {/* Header */}
            <VStack spacing={4} align="start">
              <HStack wrap="wrap" spacing={2}>
                <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="md">
                  {project.year}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    colorScheme="teal"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="md"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
              
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontFamily="heading"
              >
                {project.title}
              </Heading>
              
              <Text fontSize="lg" color="gray.500">
                {project.summary}
              </Text>

              {/* Links */}
              <HStack spacing={4} pt={2}>
                {project.github && (
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon as={FaGithub} />}
                    variant="primary"
                    size="md"
                  >
                    View on GitHub
                  </Button>
                )}
                {project.link && (
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon as={FaExternalLinkAlt} />}
                    variant="accent"
                    size="md"
                  >
                    Live Demo
                  </Button>
                )}
              </HStack>
            </VStack>

            {/* Technologies */}
            <Box>
              <Heading as="h2" size="md" mb={3}>Technologies Used</Heading>
              <HStack wrap="wrap" spacing={3}>
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    colorScheme="blue"
                    fontSize="md"
                    px={3}
                    py={2}
                    borderRadius="md"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </Box>

            {/* MDX Content */}
            <Box
              className="mdx-content"
              sx={{
                '& pre': {
                  p: 4,
                  borderRadius: 'lg',
                  overflowX: 'auto',
                  bg: 'blackAlpha.400',
                  my: 4,
                },
                '& code': {
                  fontFamily: 'mono',
                  fontSize: 'sm',
                },
                '& img': {
                  borderRadius: 'lg',
                  my: 6,
                },
              }}
            >
              <MdxRenderer code={project.body.code} />
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
