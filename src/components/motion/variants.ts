import { Variants, Transition } from 'framer-motion';

const transition: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
};

const transitionEase: Transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96], // Custom smooth ease
};

// 1. Fade In / Slide Up
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: transitionEase,
  },
};

// 2. Stagger Container for sequential children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0.1) => ({
    opacity: 1,
    transition: {
      delayChildren: custom, // Delay before children start animating
      staggerChildren: 0.15, // Delay between each child
    },
  }),
};

// 3. Scale In (for cards/tiles)
export const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: transition,
  },
};

// 4. Hover Glow (for interactive elements, combined with Tailwind CSS for shadows)
export const hoverGlow: Variants = {
  // Use a slight scale/lift effect on hover
  rest: { 
    y: 0, 
    transition: { duration: 0.4, type: 'spring' } 
  },
  hover: { 
    y: -2, 
    transition: { duration: 0.2 } 
  },
};