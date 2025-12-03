import { IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

interface BlogNavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  children: ReactNode;
}

export function BlogNavigationArrows({ onPrev, onNext, children }: BlogNavigationArrowsProps) {
  return (
    <>
      {/* Desktop: Arrows with indicator in the middle */}
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }} justify="center" align="center">
        <IconButton
          icon={<ChevronLeftIcon boxSize={8} />}
          aria-label="Previous blog source"
          size="lg"
          colorScheme="purple"
          variant="ghost"
          onClick={onPrev}
          _hover={{ 
            transform: "scale(1.1)",
            bg: 'whiteAlpha.100',
          }}
          borderRadius="full"
        />
        
        {children}
        
        <IconButton
          icon={<ChevronRightIcon boxSize={8} />}
          aria-label="Next blog source"
          size="lg"
          colorScheme="purple"
          variant="ghost"
          onClick={onNext}
          _hover={{ 
            transform: "scale(1.1)",
            bg: 'whiteAlpha.100',
          }}
          borderRadius="full"
        />
      </HStack>

      {/* Mobile: Bottom navigation */}
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
          onClick={onPrev}
          colorScheme="purple"
          size="md"
          borderRadius="full"
        />
        <IconButton
          icon={<ChevronRightIcon boxSize={6} />}
          aria-label="Next blog source"
          onClick={onNext}
          colorScheme="purple"
          size="md"
          borderRadius="full"
        />
      </HStack>
    </>
  );
}
