import { VStack, HStack, Heading, Text, Icon, Box } from '@chakra-ui/react';
import { BlogSource } from '@/config/blogSources';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface BlogSourceIndicatorProps {
  source: BlogSource;
  currentIndex: number;
  totalSources: number;
}

export function BlogSourceIndicator({ 
  source, 
  currentIndex, 
  totalSources 
}: BlogSourceIndicatorProps) {
  return (
    <VStack spacing={4} textAlign="center">
      <HStack spacing={3} justify="center" align="center">
        <Icon as={source.icon} boxSize={8} color={source.color} />
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontFamily="heading"
          bgGradient={`linear(to-r, ${source.color}, accent.500)`}
          bgClip="text"
        >
          {source.label}
        </Heading>
      </HStack>
      
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color="gray.500"
        maxW="2xl"
      >
        {source.description}
      </Text>

      {/* Pagination Dots */}
      {totalSources > 1 && (
        <HStack spacing={2} mt={2}>
          {Array.from({ length: totalSources }).map((_, i) => (
            <MotionBox
              key={i}
              h={2}
              borderRadius="full"
              bg={i === currentIndex ? source.color : 'gray.600'}
              initial={false}
              animate={{ 
                width: i === currentIndex ? 32 : 8,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </HStack>
      )}
    </VStack>
  );
}
