'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Container, Heading, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { allBlogs } from 'contentlayer/generated';
import { getBlogBySlug } from '@/lib/contentlayer';
import { MdxRenderer } from '@/lib/mdx';
import { use } from 'react';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = use(params);
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

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
