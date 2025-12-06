'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { motion, MotionProps, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/components/three/MotionManager';

// Merge Chakra Box props with Framer Motion props
type MotionBoxProps = BoxProps & MotionProps & {
    children?: React.ReactNode;
    shouldAnimate?: boolean;
};

// Convert the Chakra Box component to a Framer Motion component
const ChakraMotionBox = motion.create(Box);

/**
 * A wrapper component that combines Chakra UI styling and layout with Framer Motion animations.
 * Automatically disables animations if the user has enabled reduced motion preference.
 */
export const MotionBox: React.FC<MotionBoxProps> = ({ children, initial = "hidden", animate = "visible", shouldAnimate = true, transition, ...rest }) => {
  const prefersReducedMotion = useReducedMotion();
  
  const effectiveAnimate = (prefersReducedMotion || !shouldAnimate) ? false : animate;
  const effectiveInitial = (prefersReducedMotion || !shouldAnimate) ? false : initial;

  // Reduced motion mode uses instant transitions (duration 0)
  const effectiveTransition = prefersReducedMotion ? { duration: 0 } : transition;
  
  return (
    <AnimatePresence initial={false}>
      <ChakraMotionBox
        initial={effectiveInitial}
        animate={effectiveAnimate}
        transition={effectiveTransition}
        {...rest}
      >
        {children}
      </ChakraMotionBox>
    </AnimatePresence>
  );
};
