'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, IconButton, useColorMode } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useBlogContent } from '@/hooks/useBlogContent';
import { BLOG_SOURCES } from '@/config/blogSources';
import { BlogSourceIndicator } from '@/components/blog/BlogSourceIndicator';
import { BlogNavigationArrows } from '@/components/blog/BlogNavigationArrows';
import { LinkedInEmbedCard } from '@/components/blog/LinkedInEmbedCard';
import { staggerContainer, staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function BlogPageClient() {
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { colorMode } = useColorMode();
  
  const enabledSources = BLOG_SOURCES.filter(s => s.enabled);
  const activeSource = enabledSources[activeSourceIndex];
  const currentPosts = useBlogContent(activeSource.id);

  const handleNext = () => {
    setDirection(1);
    setActiveSourceIndex((prev) => (prev + 1) % enabledSources.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSourceIndex((prev) => 
      prev === 0 ? enabledSources.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSourceIndex]);

  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12} position="relative">
        <Container maxW="container.xl">
          <MotionVStack
            spacing={12}
            align="stretch"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Source Indicator with Navigation Arrows */}
            <VStack spacing={4}>
              {/* Desktop: Show indicator on mobile without arrows */}
              <Box display={{ base: 'block', md: 'none' }}>
                <BlogSourceIndicator
                  source={activeSource}
                  currentIndex={activeSourceIndex}
                  totalSources={enabledSources.length}
                />
              </Box>

              {/* Desktop: Arrows with indicator in middle */}
              {enabledSources.length > 1 ? (
                <BlogNavigationArrows
                  onPrev={handlePrev}
                  onNext={handleNext}
                >
                  <BlogSourceIndicator
                    source={activeSource}
                    currentIndex={activeSourceIndex}
                    totalSources={enabledSources.length}
                  />
                </BlogNavigationArrows>
              ) : (
                <Box display={{ base: 'none', md: 'block' }}>
                  <BlogSourceIndicator
                    source={activeSource}
                    currentIndex={activeSourceIndex}
                    totalSources={enabledSources.length}
                  />
                </Box>
              )}
            </VStack>

            {/* Mobile: Bottom navigation bar */}
            {enabledSources.length > 1 && (
              <HStack
                position="fixed"
                bottom={4}
                left="50%"
                transform="translateX(-50%)"
                spacing={4}
                display={{ base: 'flex', md: 'none' }}
                zIndex={10}
                bg="blackAlpha.700"
                backdropFilter="blur(10px)"
                p={2}
                borderRadius="full"
              >
                <IconButton
                  icon={<ChevronLeftIcon boxSize={6} />}
                  aria-label="Previous blog source"
                  onClick={handlePrev}
                  colorScheme="purple"
                  size="md"
                  borderRadius="full"
                />
                <IconButton
                  icon={<ChevronRightIcon boxSize={6} />}
                  aria-label="Next blog source"
                  onClick={handleNext}
                  colorScheme="purple"
                  size="md"
                  borderRadius="full"
                />
              </HStack>
            )}

            {/* Animated Content Area */}
            <AnimatePresence mode="wait" custom={direction}>
              <MotionBox
                key={activeSource.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {currentPosts.length === 0 ? (
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
                        No {activeSource.label} Yet
                      </Heading>
                      <Text color="gray.400" maxW="md">
                        {activeSource.description}
                      </Text>
                    </VStack>
                  </MotionBox>
                ) : activeSource.id === 'linkedin' ? (
                  <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                    {currentPosts.map(post => (
                      <LinkedInEmbedCard key={post.id} post={post} />
                    ))}
                  </SimpleGrid>
                ) : (
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {currentPosts.map((blog, index) => (
                      <Link key={blog.id} href={blog.url} style={{ textDecoration: 'none' }}>
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
                              {blog.excerpt}
                            </Text>
                            
                            <Text
                              fontSize="xs"
                              color="gray.500"
                            >
                              {blog.date.toLocaleDateString('en-US', {
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
              </MotionBox>
            </AnimatePresence>
          </MotionVStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
