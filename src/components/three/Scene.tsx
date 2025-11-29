/// <reference path="../../types/r3f-declarations.d.ts" />
'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Environment, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition, useReducedMotion } from './MotionManager';
import { useColorMode } from '@chakra-ui/react';
import { theme } from '@/theme/index';

// 1. Define the Shader Material (exported for R3F to recognize it)
const WaveShaderMaterial = shaderMaterial(
  {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorStart: { value: new THREE.Color(theme.colors.brand.primary[500]) },
    uColorEnd: { value: new THREE.Color(theme.colors.brand.accent[400]) },
    uLightIntensity: { value: 0.1 },
    uDarkMode: { value: 0 }, // 0 for light, 1 for dark
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vZ;

    // Based on The Book of Shaders smoothstep implementation
    float noise(vec3 p) {
      return 2.0 * fract(sin(dot(p, vec3(12.9898, 78.233, 152.123))) * 43758.5453) - 1.0;
    }

    void main() {
      vUv = uv;
      vec3 newPosition = position;
      
      // Calculate wave height based on position and time
      float wave1 = noise(newPosition.xyz * 0.5 + uTime * 0.1) * 0.5;
      float wave2 = noise(newPosition.xyz * 1.5 + uTime * 0.15) * 0.3;
      
      // Add subtle height modulation
      newPosition.z += (wave1 + wave2) * 0.5;

      // Parallax movement based on mouse
      float parallaxX = (uMouse.x * 0.05);
      float parallaxY = (uMouse.y * 0.05);
      newPosition.x += parallaxX * newPosition.z * 0.1;
      newPosition.y += parallaxY * newPosition.z * 0.1;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      vZ = newPosition.z;
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    uniform float uDarkMode;
    varying vec2 vUv;
    varying float vZ;

    void main() {
      // Interpolate colors based on wave height (vZ)
      float gradient = smoothstep(-0.2, 0.2, vZ * 1.5);
      vec3 color = mix(uColorStart, uColorEnd, gradient);
      
      // Add a slight shimmer based on time
      float intensity = 0.9 + (sin(vUv.x * 10.0 + uTime * 0.5) * 0.1);
      color *= intensity;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);
extend({ WaveShaderMaterial });

// TypeScript declaration for the custom shader material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: any;
    }
  }
}

// 2. The Interactive Mesh Component
function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);
  const { x, y } = useMousePosition();
  const { colorMode } = useColorMode();
  const prefersReducedMotion = useReducedMotion();

  // Color management (must map Chakra's colors which are defined in hex)
  const primaryLight = useMemo(() => new THREE.Color(theme.colors.brand.primary[500]), []);
  const accentLight = useMemo(() => new THREE.Color(theme.colors.brand.accent[400]), []);
  const primaryDark = useMemo(() => new THREE.Color(theme.colors.brand.primary[300]), []);
  const accentDark = useMemo(() => new THREE.Color(theme.colors.brand.accent[600]), []);


  useFrame(({ clock, camera }) => {
    if (materialRef.current && materialRef.current.uMouse) {
      materialRef.current.uTime.value = clock.getElapsedTime();
      
      // Safely update the Vector2 uniform
      if (materialRef.current.uMouse.value && materialRef.current.uMouse.value.set) {
        materialRef.current.uMouse.value.set(x * 0.5, y * 0.5);
      }
      
      materialRef.current.uDarkMode.value = colorMode === 'dark' ? 1 : 0;
      
      // Update shader colors based on theme
      if (colorMode === 'dark') {
          materialRef.current.uColorStart.value.copy(primaryDark);
          materialRef.current.uColorEnd.value.copy(accentDark);
      } else {
          materialRef.current.uColorStart.value.copy(primaryLight);
          materialRef.current.uColorEnd.value.copy(accentLight);
      }
    }
    
    // Camera Parallax
    if (!prefersReducedMotion) {
        camera.position.x += (x * 0.1 - camera.position.x) * 0.05;
        camera.position.y += (y * 0.1 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      {/* Use a larger plane geometry */}
      <planeGeometry args={[10, 10, 128, 128]} />
      {/* 
        The material is dynamically named 'waveShaderMaterial' 
        due to R3F's extend function convention. 
      */}
      {/* @ts-ignore - R3F extended material */}
      <waveShaderMaterial ref={materialRef} />
    </mesh>
  );
}


// 3. Main Scene Component
export function Scene() {
  const prefersReducedMotion = useReducedMotion();
  const mouse = useMousePosition();
  
  // Use point lights to create cursor-responsive vivid light sources
  const pointLightRef1 = useRef<THREE.PointLight>(null!);

  useFrame(() => {
      if (pointLightRef1.current && !prefersReducedMotion) {
          // Point light follows cursor slightly
          pointLightRef1.current.position.x += (mouse.x * 3 - pointLightRef1.current.position.x) * 0.1;
          pointLightRef1.current.position.y += (mouse.y * 3 - pointLightRef1.current.position.y) * 0.1;
      }
  });

  return (
    <>
      {/* Ambient and directional lighting for general visibility */}
      <ambientLight intensity={0.5} />
      
      {/* Interactive Light Sources (Teal/Pink/Indigo glows) */}
      <pointLight 
        ref={pointLightRef1}
        position={[3, 3, 3]} 
        intensity={prefersReducedMotion ? 1 : 10} 
        distance={20}
        color={theme.colors.neon.indigo} // Vivid indigo
      />
      <pointLight 
        position={[-3, -3, 3]} 
        intensity={prefersReducedMotion ? 1 : 10} 
        distance={20}
        color={theme.colors.neon.pink} // Vivid pink
      />
      
      {/* 
        The Wave Mesh is rendered only if motion is not reduced, 
        meeting the requirement for reduced-motion mode: static gradient only.
      */}
      {!prefersReducedMotion && (
        <Suspense fallback={null}>
          <WaveMesh />
        </Suspense>
      )}

      {/* Basic fallback mesh for reduced motion mode: a simple static plane */}
      {prefersReducedMotion && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[10, 10, 1, 1]} />
            <meshStandardMaterial color={theme.colors.brand.primary[500]} />
        </mesh>
      )}
      
      {/* Optional: Add soft shadows using Drei's SoftShadows (requires additional setup if needed, but keeping it simple for now) */}
      <Environment preset="city" />
    </>
  );
}