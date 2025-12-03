import { useState } from 'react';
import { Box, VStack, Heading, Text, HStack, Badge, IconButton, Link, Skeleton } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { UnifiedBlogPost } from '@/hooks/useBlogContent';
import { staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);

interface LinkedInEmbedCardProps {
  post: UnifiedBlogPost;
}

export function LinkedInEmbedCard({ post }: LinkedInEmbedCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionBox
      variants={staggerItem}
      p={6}
      bg="whiteAlpha.50"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      whileHover={{
        borderColor: 'blue.500',
        boxShadow: '0 8px 30px rgba(66, 153, 225, 0.2)',
        y: -4,
      }}
      transition={{ duration: 0.3 }}
    >
      <VStack align="stretch" spacing={4}>
        {/* Header with title and LinkedIn link */}
        <HStack justify="space-between" align="start">
          <VStack align="start" spacing={1} flex={1}>
            <Heading size="md" noOfLines={2}>
              {post.title}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {post.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </VStack>
          
          <Link href={post.linkedinUrl} isExternal>
            <IconButton
              icon={<FaExternalLinkAlt />}
              aria-label="View on LinkedIn"
              size="sm"
              colorScheme="blue"
              variant="ghost"
            />
          </Link>
        </HStack>

        {/* Tags */}
        {post.tags.length > 0 && (
          <HStack wrap="wrap" spacing={2}>
            {post.tags.map(tag => (
              <Badge 
                key={tag} 
                colorScheme="blue" 
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        )}

        {/* Excerpt */}
        <Text color="gray.400" fontSize="sm" noOfLines={3}>
          {post.excerpt}
        </Text>

        {/* LinkedIn Embed iframe */}
        <Box
          position="relative"
          width="100%"
          height="300px"
          bg="blackAlpha.300"
          borderRadius="lg"
          overflow="hidden"
        >
          <AnimatePresence>
            {isLoading && (
              <MotionBox
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Skeleton
                  height="100%"
                  width="100%"
                  startColor="whiteAlpha.100"
                  endColor="whiteAlpha.200"
                  borderRadius="lg"
                />
              </MotionBox>
            )}
          </AnimatePresence>
          
          <iframe
            src={post.embedUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoad={() => setIsLoading(false)}
            allowFullScreen
            title={`LinkedIn post: ${post.title}`}
            loading="lazy"
          />
        </Box>
      </VStack>
    </MotionBox>
  );
}
