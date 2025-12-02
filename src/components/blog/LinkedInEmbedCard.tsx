import { Box, VStack, Heading, Text, HStack, Badge, IconButton, Link } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { UnifiedBlogPost } from '@/hooks/useBlogContent';
import { staggerItem } from '@/components/motion/variants';

const MotionBox = motion(Box);

interface LinkedInEmbedCardProps {
  post: UnifiedBlogPost;
}

export function LinkedInEmbedCard({ post }: LinkedInEmbedCardProps) {
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
          height="500px"
          bg="blackAlpha.300"
          borderRadius="lg"
          overflow="hidden"
        >
          <iframe
            src={post.embedUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
            title={`LinkedIn post: ${post.title}`}
            loading="lazy"
          />
        </Box>
      </VStack>
    </MotionBox>
  );
}
