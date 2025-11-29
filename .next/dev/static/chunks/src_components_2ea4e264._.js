(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/three/MotionManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMousePosition",
    ()=>useMousePosition,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useReducedMotion() {
    _s();
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            // Check client-side only
            if ("TURBOPACK compile-time truthy", 1) {
                const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
                setPrefersReducedMotion(mediaQuery.matches);
                const handleChange = {
                    "useReducedMotion.useEffect.handleChange": ()=>setPrefersReducedMotion(mediaQuery.matches)
                }["useReducedMotion.useEffect.handleChange"];
                mediaQuery.addEventListener('change', handleChange);
                return ({
                    "useReducedMotion.useEffect": ()=>mediaQuery.removeEventListener('change', handleChange)
                })["useReducedMotion.useEffect"];
            }
        }
    }["useReducedMotion.useEffect"], []);
    return prefersReducedMotion;
}
_s(useReducedMotion, "c2o+PeDo1dLruq/wbnW+Z6a6rIY=");
function useMousePosition() {
    _s1();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMousePosition.useEffect": ()=>{
            const handleMouseMove = {
                "useMousePosition.useEffect.handleMouseMove": (event)=>{
                    // Normalize position to [-1, 1] for R3F coordinates
                    const x = event.clientX / window.innerWidth * 2 - 1;
                    const y = -(event.clientY / window.innerHeight) * 2 + 1;
                    setMousePosition({
                        x,
                        y
                    });
                }
            }["useMousePosition.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "useMousePosition.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["useMousePosition.useEffect"];
        }
    }["useMousePosition.useEffect"], []);
    return mousePosition;
}
_s1(useMousePosition, "fMKQEA5Ch9a+sa/f9kYDpd8GZ50=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../types/r3f-declarations.d.ts" />
__turbopack_context__.s([
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/MotionManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// 1. Define the Shader Material (exported for R3F to recognize it)
const WaveShaderMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderMaterial"])({
    uTime: {
        value: 0
    },
    uMouse: {
        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
    },
    uColorStart: {
        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.primary[500])
    },
    uColorEnd: {
        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.accent[400])
    },
    uLightIntensity: {
        value: 0.1
    },
    uDarkMode: {
        value: 0
    }
}, // Vertex Shader
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
  `, // Fragment Shader
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
  `);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    WaveShaderMaterial
});
// 2. The Interactive Mesh Component
function WaveMesh() {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"])();
    const { colorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Color management (must map Chakra's colors which are defined in hex)
    const primaryLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WaveMesh.useMemo[primaryLight]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.primary[500])
    }["WaveMesh.useMemo[primaryLight]"], []);
    const accentLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WaveMesh.useMemo[accentLight]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.accent[400])
    }["WaveMesh.useMemo[accentLight]"], []);
    const primaryDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WaveMesh.useMemo[primaryDark]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.primary[300])
    }["WaveMesh.useMemo[primaryDark]"], []);
    const accentDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WaveMesh.useMemo[accentDark]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.accent[600])
    }["WaveMesh.useMemo[accentDark]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "WaveMesh.useFrame": ({ clock, camera })=>{
            if (materialRef.current) {
                materialRef.current.uTime.value = clock.getElapsedTime();
                materialRef.current.uMouse.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x * 0.5, y * 0.5);
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
        }
    }["WaveMesh.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            -1,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    10,
                    10,
                    128,
                    128
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("waveShaderMaterial", {
                ref: materialRef
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/three/Scene.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(WaveMesh, "k09AvCJSnN+GMMOyEScJvCk5luY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = WaveMesh;
function Scene() {
    _s1();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"])();
    // Use point lights to create cursor-responsive vivid light sources
    const pointLightRef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Scene.useFrame": ()=>{
            if (pointLightRef1.current && !prefersReducedMotion) {
                // Point light follows cursor slightly
                pointLightRef1.current.position.x += (mouse.x * 3 - pointLightRef1.current.position.x) * 0.1;
                pointLightRef1.current.position.y += (mouse.y * 3 - pointLightRef1.current.position.y) * 0.1;
            }
        }
    }["Scene.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.5
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: pointLightRef1,
                position: [
                    3,
                    3,
                    3
                ],
                intensity: prefersReducedMotion ? 1 : 10,
                distance: 20,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.neon.indigo
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -3,
                    -3,
                    3
                ],
                intensity: prefersReducedMotion ? 1 : 10,
                distance: 20,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.neon.pink
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            !prefersReducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveMesh, {}, void 0, false, {
                    fileName: "[project]/src/components/three/Scene.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            prefersReducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -1,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            10,
                            10,
                            1,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/Scene.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.brand.primary[500]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/Scene.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "city"
            }, void 0, false, {
                fileName: "[project]/src/components/three/Scene.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(Scene, "djUo31xUYzD8Qinm/cZypQbtLSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Scene;
var _c, _c1;
__turbopack_context__.k.register(_c, "WaveMesh");
__turbopack_context__.k.register(_c1, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/R3FCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>R3FCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/Scene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/MotionManager.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function R3FCanvas() {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        position: "absolute",
        top: "0",
        left: "0",
        w: "full",
        h: "full",
        zIndex: 0,
        pointerEvents: "auto",
        children: prefersReducedMotion ? // Static gradient background for reduced motion mode
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            w: "full",
            h: "full",
            bgGradient: "linear(to-br, brand.primary.500, brand.accent.400)",
            opacity: 0.3
        }, void 0, false, {
            fileName: "[project]/src/components/three/R3FCanvas.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, this) : // Full 3D interactive background
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            // Set a default camera position slightly back and up
            camera: {
                position: [
                    0,
                    1.5,
                    3.5
                ],
                fov: 75
            },
            linear: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"], {}, void 0, false, {
                fileName: "[project]/src/components/three/R3FCanvas.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/three/R3FCanvas.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/three/R3FCanvas.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(R3FCanvas, "VVlbsF4XHDtJtLWyDw/S3b1ysqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$MotionManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = R3FCanvas;
var _c;
__turbopack_context__.k.register(_c, "R3FCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/motion/variants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardHover",
    ()=>cardHover,
    "fadeIn",
    ()=>fadeIn,
    "float",
    ()=>float,
    "hoverGlow",
    ()=>hoverGlow,
    "hoverLift",
    ()=>hoverLift,
    "pageTransition",
    ()=>pageTransition,
    "scaleIn",
    ()=>scaleIn,
    "slideInLeft",
    ()=>slideInLeft,
    "slideInRight",
    ()=>slideInRight,
    "slideUp",
    ()=>slideUp,
    "staggerContainer",
    ()=>staggerContainer,
    "staggerItem",
    ()=>staggerItem
]);
// Check if user prefers reduced motion
const prefersReducedMotion = ("TURBOPACK compile-time truthy", 1) ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : "TURBOPACK unreachable";
const transition = {
    type: 'spring',
    damping: 30,
    stiffness: 200
};
const transitionEase = {
    duration: prefersReducedMotion ? 0 : 0.6,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.8
        }
    }
};
const slideUp = {
    hidden: {
        y: prefersReducedMotion ? 0 : 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: transitionEase
    }
};
const slideInLeft = {
    hidden: {
        opacity: 0,
        x: prefersReducedMotion ? 0 : -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitionEase
    }
};
const slideInRight = {
    hidden: {
        opacity: 0,
        x: prefersReducedMotion ? 0 : 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitionEase
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: (custom = 0.1)=>({
            opacity: 1,
            transition: {
                delayChildren: prefersReducedMotion ? 0 : custom,
                staggerChildren: prefersReducedMotion ? 0 : 0.15
            }
        })
};
const staggerItem = {
    hidden: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitionEase
    }
};
const scaleIn = {
    hidden: {
        scale: prefersReducedMotion ? 1 : 0.9,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: transition
    }
};
const hoverGlow = {
    rest: {
        y: 0,
        transition: {
            duration: 0.4,
            type: 'spring'
        }
    },
    hover: {
        y: prefersReducedMotion ? 0 : -2,
        transition: {
            duration: 0.2
        }
    }
};
const hoverLift = {
    initial: {
        y: 0
    },
    hover: {
        y: prefersReducedMotion ? 0 : -8,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    }
};
const cardHover = {
    initial: {
        y: 0,
        scale: 1
    },
    hover: {
        y: prefersReducedMotion ? 0 : -8,
        scale: prefersReducedMotion ? 1 : 1.02,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    }
};
const float = {
    hidden: {
        y: 0
    },
    visible: {
        y: prefersReducedMotion ? 0 : [
            -10,
            10,
            -10
        ],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
const pageTransition = {
    hidden: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : -20,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.3,
            ease: 'easeIn'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/container/container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/button/button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/icons/dist/esm/Download.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$R3FCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/R3FCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/motion/variants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const MotionBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const MotionHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"]);
_c1 = MotionHeading;
const MotionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]);
_c2 = MotionText;
const MotionVStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"]);
_c3 = MotionVStack;
function Hero() {
    _s();
    const { colorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        position: "relative",
        minH: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$R3FCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: colorMode === 'dark' ? 'rgba(11, 14, 20, 0.7)' : 'rgba(248, 250, 252, 0.7)',
                zIndex: 1
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                maxW: "container.xl",
                position: "relative",
                zIndex: 2,
                py: 20,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionVStack, {
                    spacing: 6,
                    align: "center",
                    textAlign: "center",
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                    initial: "hidden",
                    animate: "visible",
                    custom: 0.2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionText, {
                            fontSize: {
                                base: 'lg',
                                md: 'xl'
                            },
                            fontWeight: "medium",
                            color: "primary.500",
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            children: "Hi, I'm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionHeading, {
                            as: "h1",
                            fontSize: {
                                base: '4xl',
                                md: '6xl',
                                lg: '7xl'
                            },
                            fontFamily: "heading",
                            fontWeight: "bold",
                            bgGradient: "linear(to-r, primary.500, accent.500, secondary.500)",
                            bgClip: "text",
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            children: "Federico Marchetti"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionText, {
                            fontSize: {
                                base: 'xl',
                                md: '2xl',
                                lg: '3xl'
                            },
                            fontWeight: "medium",
                            color: colorMode === 'dark' ? 'gray.300' : 'gray.700',
                            maxW: "3xl",
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            children: "Full-Stack Developer • React • .NET • Azure"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionText, {
                            fontSize: {
                                base: 'md',
                                md: 'lg'
                            },
                            color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
                            maxW: "2xl",
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            children: "I build modern, scalable web applications with beautiful user experiences. Passionate about clean code, cloud architecture, and continuous learning."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            mt: 4,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                                spacing: 4,
                                flexWrap: "wrap",
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projects",
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            as: "a",
                                            size: "lg",
                                            variant: "primary",
                                            fontSize: "md",
                                            px: 8,
                                            _hover: {
                                                transform: 'translateY(-2px)',
                                                boxShadow: colorMode === 'dark' ? '0 0 20px rgba(165, 180, 252, 0.6)' : '0 4px 12px rgba(99, 102, 241, 0.4)'
                                            },
                                            children: "View Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            as: "a",
                                            size: "lg",
                                            variant: "accent",
                                            fontSize: "md",
                                            px: 8,
                                            _hover: {
                                                transform: 'translateY(-2px)',
                                                boxShadow: colorMode === 'dark' ? '0 0 20px rgba(244, 114, 182, 0.6)' : '0 4px 12px rgba(244, 114, 182, 0.4)'
                                            },
                                            children: "Read Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        as: "a",
                                        href: "/Federico_Marchetti_Resume.pdf",
                                        download: true,
                                        size: "lg",
                                        variant: "ghost",
                                        fontSize: "md",
                                        px: 8,
                                        leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadIcon"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 145,
                                            columnNumber: 27
                                        }, void 0),
                                        borderWidth: "2px",
                                        borderColor: colorMode === 'dark' ? 'primary.300' : 'primary.500',
                                        color: colorMode === 'dark' ? 'primary.300' : 'primary.500',
                                        _hover: {
                                            bg: colorMode === 'dark' ? 'primary.900' : 'primary.50',
                                            transform: 'translateY(-2px)'
                                        },
                                        children: "Download Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
                            mt: 12,
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
                            animate: {
                                y: [
                                    0,
                                    10,
                                    0
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                fontSize: "sm",
                                color: colorMode === 'dark' ? 'gray.500' : 'gray.600',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 2,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        as: "span",
                                        w: "1px",
                                        h: "40px",
                                        bg: colorMode === 'dark' ? 'gray.600' : 'gray.400'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    "Scroll to explore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Hero, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"]
    ];
});
_c4 = Hero;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "MotionHeading");
__turbopack_context__.k.register(_c2, "MotionText");
__turbopack_context__.k.register(_c3, "MotionVStack");
__turbopack_context__.k.register(_c4, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/container/container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$grid$2f$simple$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/grid/simple-grid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$icon$2f$icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/icon/icon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/motion/variants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const MotionBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const MotionVStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"]);
_c1 = MotionVStack;
const skills = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCode"],
        title: 'Frontend Development',
        description: 'Building responsive, interactive UIs with React, Next.js, TypeScript, and modern CSS frameworks.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloud"],
        title: 'Backend & Cloud',
        description: 'Developing scalable APIs with .NET Core and deploying to Azure cloud infrastructure.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPalette"],
        title: 'UI/UX Design',
        description: 'Creating beautiful, accessible interfaces with attention to detail and user experience.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRocket"],
        title: 'Performance',
        description: 'Optimizing applications for speed, SEO, and scalability with best practices.'
    }
];
function About() {
    _s();
    const { colorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        py: 20,
        position: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "container.xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionVStack, {
                spacing: 16,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: 0.3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionVStack, {
                        spacing: 4,
                        textAlign: "center",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                as: "h2",
                                fontSize: {
                                    base: '3xl',
                                    md: '4xl',
                                    lg: '5xl'
                                },
                                fontFamily: "heading",
                                bgGradient: "linear(to-r, primary.500, accent.500)",
                                bgClip: "text",
                                children: "What I Do"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                fontSize: {
                                    base: 'md',
                                    md: 'lg'
                                },
                                color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
                                maxW: "2xl",
                                children: "Crafting digital experiences with modern technologies and best practices"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$grid$2f$simple$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                        columns: {
                            base: 1,
                            md: 2,
                            lg: 4
                        },
                        spacing: 8,
                        w: "full",
                        children: skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                custom: index * 0.1,
                                p: 6,
                                bg: colorMode === 'dark' ? 'whiteAlpha.50' : 'white',
                                borderRadius: "xl",
                                borderWidth: "1px",
                                borderColor: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
                                _hover: {
                                    transform: 'translateY(-8px)',
                                    boxShadow: colorMode === 'dark' ? '0 8px 30px rgba(165, 180, 252, 0.2)' : '0 8px 30px rgba(0, 0, 0, 0.1)',
                                    borderColor: 'primary.500'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                                    align: "start",
                                    spacing: 4,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$icon$2f$icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            as: skill.icon,
                                            boxSize: 10,
                                            color: "primary.500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                            as: "h3",
                                            size: "md",
                                            fontFamily: "heading",
                                            children: skill.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            fontSize: "sm",
                                            color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
                                            children: skill.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            }, skill.title, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/About.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(About, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"]
    ];
});
_c2 = About;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "MotionVStack");
__turbopack_context__.k.register(_c2, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/container/container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$icon$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/button/icon-button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/link/link.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$drawer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/modal/drawer.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$body$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalBody__as__DrawerBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/modal/modal-body.mjs [app-client] (ecmascript) <export ModalBody as DrawerBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalOverlay__as__DrawerOverlay$3e$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/modal/modal-overlay.mjs [app-client] (ecmascript) <export ModalOverlay as DrawerOverlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$drawer$2d$content$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/modal/drawer-content.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$close$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalCloseButton__as__DrawerCloseButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/modal/modal-close-button.mjs [app-client] (ecmascript) <export ModalCloseButton as DrawerCloseButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$hooks$2f$dist$2f$esm$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/icons/dist/esm/Moon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/icons/dist/esm/Sun.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Hamburger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/icons/dist/esm/Hamburger.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MotionBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];
function Navbar() {
    _s();
    const { colorMode, toggleColorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isOpen, onOpen, onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$hooks$2f$dist$2f$esm$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const isActive = (href)=>{
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
        as: "nav",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bg: colorMode === 'dark' ? 'rgba(11, 14, 20, 0.8)' : 'rgba(248, 250, 252, 0.8)',
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                maxW: "container.xl",
                py: 4,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                    justify: "space-between",
                    align: "center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            href: "/",
                            fontSize: "2xl",
                            fontFamily: "heading",
                            fontWeight: "bold",
                            bgGradient: "linear(to-r, primary.500, accent.500)",
                            bgClip: "text",
                            _hover: {
                                textDecoration: 'none'
                            },
                            children: "FM"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            display: {
                                base: 'none',
                                md: 'flex'
                            },
                            gap: 6,
                            align: "center",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                        href: link.href,
                                        position: "relative",
                                        fontWeight: isActive(link.href) ? 'bold' : 'medium',
                                        color: isActive(link.href) ? 'primary.500' : 'inherit',
                                        _hover: {
                                            color: 'primary.500',
                                            textDecoration: 'none'
                                        },
                                        _after: isActive(link.href) ? {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            bg: 'primary.500',
                                            borderRadius: 'full'
                                        } : undefined,
                                        children: link.name
                                    }, link.href, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$icon$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                    "aria-label": "Toggle color mode",
                                    icon: colorMode === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SunIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 44
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoonIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 58
                                    }, void 0),
                                    onClick: toggleColorMode,
                                    variant: "ghost",
                                    size: "md"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            display: {
                                base: 'flex',
                                md: 'none'
                            },
                            gap: 2,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$icon$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                    "aria-label": "Toggle color mode",
                                    icon: colorMode === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SunIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 44
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoonIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 58
                                    }, void 0),
                                    onClick: toggleColorMode,
                                    variant: "ghost",
                                    size: "md"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$icon$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                    "aria-label": "Open menu",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Hamburger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HamburgerIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, void 0),
                                    onClick: onOpen,
                                    variant: "ghost",
                                    size: "md"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$drawer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Drawer"], {
                isOpen: isOpen,
                placement: "right",
                onClose: onClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalOverlay__as__DrawerOverlay$3e$__["DrawerOverlay"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$drawer$2d$content$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$close$2d$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalCloseButton__as__DrawerCloseButton$3e$__["DrawerCloseButton"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$modal$2f$modal$2d$body$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ModalBody__as__DrawerBody$3e$__["DrawerBody"], {
                                pt: 16,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                                    spacing: 6,
                                    align: "stretch",
                                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                            href: link.href,
                                            fontSize: "xl",
                                            fontWeight: isActive(link.href) ? 'bold' : 'medium',
                                            color: isActive(link.href) ? 'primary.500' : 'inherit',
                                            onClick: onClose,
                                            _hover: {
                                                color: 'primary.500',
                                                textDecoration: 'none'
                                            },
                                            children: link.name
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Navbar, "yqLuVN2bP0t1Hz6F6ppJRwotOI0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$hooks$2f$dist$2f$esm$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"]
    ];
});
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/container/container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/link/link.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$icon$2f$icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/icon/icon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$divider$2f$divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/divider/divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const socialLinks = [
    {
        name: 'GitHub',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"],
        href: 'https://github.com/federicomarchetti'
    },
    {
        name: 'LinkedIn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"],
        href: 'https://linkedin.com/in/federicomarchetti'
    },
    {
        name: 'Email',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"],
        href: 'mailto:federico.marchetti@example.com'
    }
];
const footerLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];
function Footer() {
    _s();
    const { colorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"])();
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        as: "footer",
        mt: 20,
        py: 12,
        borderTop: "1px solid",
        borderColor: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
        bg: colorMode === 'dark' ? 'rgba(11, 14, 20, 0.5)' : 'rgba(248, 250, 252, 0.5)',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "container.xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                spacing: 8,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                        spacing: 8,
                        flexWrap: "wrap",
                        justify: "center",
                        children: footerLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: link.href,
                                fontSize: "sm",
                                color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
                                _hover: {
                                    color: 'primary.500',
                                    textDecoration: 'none'
                                },
                                children: link.name
                            }, link.href, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$divider$2f$divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                        spacing: 6,
                        children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$link$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: social.href,
                                isExternal: true,
                                "aria-label": social.name,
                                _hover: {
                                    transform: 'translateY(-4px)',
                                    color: 'primary.500'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$icon$2f$icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    as: social.icon,
                                    boxSize: 6
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            }, social.name, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        direction: {
                            base: 'column',
                            md: 'row'
                        },
                        align: "center",
                        gap: 2,
                        fontSize: "sm",
                        color: colorMode === 'dark' ? 'gray.500' : 'gray.600',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                children: [
                                    "© ",
                                    currentYear,
                                    " Federico Marchetti. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                align: "center",
                                gap: 1,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        children: "Built with"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$icon$2f$icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"],
                                        color: "accent.500",
                                        boxSize: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        children: "using Next.js, React Three Fiber & Chakra UI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Footer, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorMode"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_2ea4e264._.js.map