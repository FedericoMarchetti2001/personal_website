'use client';

import { Box, Container, Heading, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdxRenderer } from '@/lib/mdx';
import type { Blog } from 'contentlayer/generated';

interface BlogPostClientProps {
  blog: Blog;
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12}>
        <Container maxW="container.md">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <VStack spacing={4} align="start">
              <HStack wrap="wrap" spacing={2}>
                {blog.tags.map((tag) => (
                  <Badge
                    key={tag}
                    colorScheme="purple"
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
                {blog.title}
              </Heading>
              
              <Text fontSize="lg" color="gray.500">
                {blog.description}
              </Text>
              
              <Text fontSize="sm" color="gray.600">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
            </VStack>

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
              <MdxRenderer code={blog.body.code} />
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
