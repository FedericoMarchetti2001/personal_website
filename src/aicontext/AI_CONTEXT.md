AI_CONTEXT.md
# AI_CONTEXT.md  
## Technical + Architectural Blueprint  
### For Vibecoding the Personal Website of FEDERICO MARCHETTI

---

# 🔧 CORE ARCHITECTURE

Framework: **Next.js 16 (App Router, Turbopack, `output: 'standalone'`)**  
Language: **TypeScript (strict: true)**  
Styling: **Tailwind CSS 4 + Chakra UI 2**  
Animation: **Framer Motion**  
3D Graphics: **React Three Fiber + Drei**  
Content CMS: **Contentlayer (MDX)**  
Resume: **JSON-driven**  
Deployment: **Vercel**  

---

# 📁 PROJECT STRUCTURE RULES

**You MUST follow this structure exactly:**



src/
├─ app/... (routes)
├─ components/... (UI, motion, three, layout)
├─ config/blogSources.ts
├─ hooks/useBlogContent.ts
├─ lib/... (contentlayer, mdx, resume utilities)
├─ content/... (blog + projects MDX)
├─ data/ (resume.json, linkedinPosts.ts)
├─ theme/index.ts
├─ styles/globals.css
└─ public/assets


Do NOT deviate unless expanding logically.

---

# 🎨 DESIGN SYSTEM

## 💡 Color Palette (Vivid Indigo + Pink + Teal)

Use these tokens:

- `primary: indigo.500 -> indigo.300 dark`
- `accent: pink.400 -> pink.600 dark`
- `secondary: teal.400 -> teal.500 dark`
- Background:
  - Light: `slate.50`
  - Dark: `#0B0E14` (deep navy/ink)
- Glow colors:
  - neon-indigo
  - neon-pink
  - cyan-teal

---

## 🖋 Typography

- Body: `"Inter", sans-serif`
- Headings: `"Space Grotesk", sans-serif`
- Code (blog): `"JetBrains Mono", monospace`

---

# 🌀 ANIMATION SYSTEM

## Framer Motion Rules

- Use a `/components/motion` folder with:
  - `fadeIn`
  - `slideUp`
  - `slideInLeft`
  - `slideInRight`
  - `staggerContainer`
  - `staggerItem`
  - `scaleIn`
  - `hoverGlow`
  - plus `hoverLift`, `cardHover`, `float`, `pageTransition` (all in `src/components/motion/variants.ts`)
- Prefers-reduced-motion: disable via conditionals.

---

# 🎛 3D BACKGROUND SYSTEM (R3F)

Use R3F + Drei.

### Requirements:
- A single `<Canvas>` that:
  - contains a noise/wave mesh
  - light sources react to pointer
  - subtle camera parallax
- Effects:
  - bloom
  - soft shadows
  - color-shifting uniforms based on theme

Disable for motion-reduced.

---

# 📚 CONTENTLAYER SYSTEM

Content root is `src/content` (`contentlayer.config.ts`): `blog/**/*.mdx` (folder not present yet) and `projects/**/*.mdx`. The blog page currently lists LinkedIn posts from `src/data/linkedinPosts.ts` via `src/hooks/useBlogContent.ts` and `src/config/blogSources.ts`. Generate output with `node scripts/contentlayer-build.mjs` (`npm run refresh`).

### Blog fields:


title: string
description: string
date: string
tags: string[]


### Projects fields:


title: string
summary: string
year: number
tags: string[]
technologies: string[]
coverImage: string
github: string
link: string


Automatically generate routes.

---

# 🧩 RESUME SYSTEM

Use `/data/resume.json`.

Populate using CV information from the provided PDF.

**Keys:**



summary
experience[]
skills[]
certifications[]
languages[]
education[]
links { github, linkedin, email }


---

# 📱 RESPONSIVE DESIGN

Mobile-first layout using Tailwind responsive utilities  
Chakra components must be wrapped with Tailwind classes where helpful.

Use:

- `max-w-screen-xl`
- `px-4 sm:px-6 lg:px-8`
- `grid grid-cols-1 md:grid-cols-2`

---

# ♿ ACCESSIBILITY

- Chakra UI handles base roles
- Every interactive element must have:
  - aria-label
  - keyboard focus ring
- `prefers-reduced-motion` respected across R3F + Framer

---

# 🔍 SEO / OPEN GRAPH

Include:

- `/app/sitemap.ts`
- OG meta for pages:
  - title
  - description
  - url
  - image

Metadata must be pulled from:
- reality (Federico Marchetti info)
- page frontmatter

---

# 🎯 FINAL RULES FOR THE AI

- Follow this architecture exactly.
- No shortcuts.
- No generic design — everything must follow the defined vivid aesthetic.
- All code must be valid TypeScript.
- All animations must be subtle yet delightful.
- 3D background MUST be interactive.
- Everything must look equally good in dark/light themes.
- Generate production-ready output every time.

This file governs ALL decisions of the vibecoding agent.
## Tooling notes
- `.npmrc` sets `legacy-peer-deps=true` because `next-contentlayer@0.3.4` peers on Next 12/13 while the site runs Next 16 (`npm ci` fails with ERESOLVE otherwise).
- `npm run lint` runs `eslint .` with `eslint.config.mjs` (Next core-web-vitals preset); `next lint` no longer exists in Next 16.
