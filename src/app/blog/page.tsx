'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { allSortedBlogs } from '@/lib/contentlayer';
import { staggerContainer, staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function BlogPage() {
  const blogs = allSortedBlogs();
  const { colorMode } = useColorMode();

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
                Blog
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.500"
                maxW="2xl"
              >
                Thoughts, tutorials, and insights on modern web development
              </Text>
            </MotionVStack>

            {/* Empty State or Blog Grid */}
            {blogs.length === 0 ? (
              <MotionBox
                variants={staggerItem}
                p={12}
                textAlign="center"
                bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'white'}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
              >
                <VStack spacing={4}>
                  <Heading as="h2" size="lg" color="gray.500">
                    No Blog Posts Yet
                  </Heading>
                  <Text color="gray.400" maxW="md">
                    I'm currently working on some exciting content. Check back soon for articles on web development, cloud architecture, and software engineering!
                  </Text>
                </VStack>
              </MotionBox>
            ) : (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={8}
              >
                {blogs.map((blog, index) => (
                  <Link key={blog.slug} href={blog.url} style={{ textDecoration: 'none' }}>
                    <MotionBox
                      variants={staggerItem}
                      custom={index * 0.1}
                      p={6}
                      bg="whiteAlpha.50"
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor="whiteAlpha.100"
                      cursor="pointer"
                      _hover={{
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(165, 180, 252, 0.2)',
                        borderColor: 'primary.500',
                        textDecoration: 'none',
                      }}
                    >
                      <VStack align="start" spacing={4}>
                        <HStack wrap="wrap" spacing={2}>
                          {blog.tags.map((tag) => (
                            <Badge
                              key={tag}
                              colorScheme="purple"
                              fontSize="xs"
                              px={2}
                              py={1}
                              borderRadius="md"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </HStack>
                        
                        <Heading
                          as="h2"
                          size="md"
                          fontFamily="heading"
                          noOfLines={2}
                        >
                          {blog.title}
                        </Heading>
                        
                        <Text
                          fontSize="sm"
                          color="gray.400"
                          noOfLines={3}
                        >
                          {blog.description}
                        </Text>
                        
                        <Text
                          fontSize="xs"
                          color="gray.500"
                        >
                          {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </Text>
                      </VStack>
                    </MotionBox>
                  </Link>
                ))}
              </SimpleGrid>
            )}
          </MotionVStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}