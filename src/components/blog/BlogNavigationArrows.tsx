import { IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface BlogNavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function BlogNavigationArrows({ onPrev, onNext }: BlogNavigationArrowsProps) {
  return (
    <>
      {/* Desktop: Fixed position arrows on sides */}
      <IconButton
        icon={<ChevronLeftIcon boxSize={8} />}
        aria-label="Previous blog source"
        position="fixed"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        size="lg"
        colorScheme="purple"
        variant="ghost"
        onClick={onPrev}
        _hover={{ 
          transform: "translateY(-50%) scale(1.1)",
          bg: 'whiteAlpha.100',
        }}
        display={{ base: 'none', md: 'flex' }}
        zIndex={10}
        borderRadius="full"
      />

      <IconButton
        icon={<ChevronRightIcon boxSize={8} />}
        aria-label="Next blog source"
        position="fixed"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        size="lg"
        colorScheme="purple"
        variant="ghost"
        onClick={onNext}
        _hover={{ 
          transform: "translateY(-50%) scale(1.1)",
          bg: 'whiteAlpha.100',
        }}
        display={{ base: 'none', md: 'flex' }}
        zIndex={10}
        borderRadius="full"
      />

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
