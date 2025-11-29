import { Variants, Transition } from 'framer-motion';

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

const transition: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
};

const transitionEase: Transition = {
  duration: prefersReducedMotion ? 0 : 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

// 1. Fade In / Slide Up
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: prefersReducedMotion ? 0 : 0.8 } 
  },
};

export const slideUp: Variants = {
  hidden: { 
    y: prefersReducedMotion ? 0 : 20, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: transitionEase,
  },
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: prefersReducedMotion ? 0 : -60,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: transitionEase,
  },
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: prefersReducedMotion ? 0 : 60,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: transitionEase,
  },
};

// 2. Stagger Container for sequential children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0.1) => ({
    opacity: 1,
    transition: {
      delayChildren: prefersReducedMotion ? 0 : custom,
      staggerChildren: prefersReducedMotion ? 0 : 0.15,
    },
  }),
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: transitionEase,
  },
};

// 3. Scale In (for cards/tiles)
export const scaleIn: Variants = {
  hidden: { 
    scale: prefersReducedMotion ? 1 : 0.9, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: transition,
  },
};

// 4. Hover Glow (for interactive elements)
export const hoverGlow: Variants = {
  rest: { 
    y: 0, 
    transition: { duration: 0.4, type: 'spring' } 
  },
  hover: { 
    y: prefersReducedMotion ? 0 : -2, 
    transition: { duration: 0.2 } 
  },
};

export const hoverLift = {
  initial: { y: 0 },
  hover: {
    y: prefersReducedMotion ? 0 : -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const cardHover = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: prefersReducedMotion ? 0 : -8,
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: prefersReducedMotion ? 0 : [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pageTransition: Variants = {
  hidden: { 
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: 'easeOut',
    },
  },
  exit: { 
    opacity: 0,
    y: prefersReducedMotion ? 0 : -20,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.3,
      ease: 'easeIn',
    },
  },
};