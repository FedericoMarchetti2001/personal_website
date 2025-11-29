'use client';

import { Canvas } from '@react-three/fiber';
import { Box } from '@chakra-ui/react';
import { Scene } from './Scene';
import { useReducedMotion } from './MotionManager';

/**
 * R3FCanvas component wraps the main 3D scene.
 * It conditionally renders the full 3D scene or a static element
 * based on the user's motion preference.
 */
export default function R3FCanvas() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      w="full"
      h="full"
      zIndex={0}
      pointerEvents="auto" // Allows mouse events to reach the canvas
    >
      {prefersReducedMotion ? (
        // Static gradient background for reduced motion mode
        <Box 
            w="full" 
            h="full" 
            bgGradient="linear(to-br, brand.primary.500, brand.accent.400)" 
            opacity={0.3}
        />
      ) : (
        // Full 3D interactive background
        <Canvas 
          // Set a default camera position slightly back and up
          camera={{ position: [0, 1.5, 3.5], fov: 75 }} 
          linear // Use linear color space for more vibrant colors
          // Hide controls from R3F for performance and style (e.g. OrbitControls)
          // We handle camera movement via mouse in Scene.tsx
        >
          <Scene />
        </Canvas>
      )}
    </Box>
  );
}