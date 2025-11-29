AI_CONTEXT.md
# AI_CONTEXT.md  
## Technical + Architectural Blueprint  
### For Vibecoding the Personal Website of FEDERICO MARCHETTI

---

# 🔧 CORE ARCHITECTURE

Framework: **Next.js 14 (App Router)**  
Language: **TypeScript (strict: true)**  
Styling: **Tailwind CSS + Chakra UI**  
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
├─ lib/... (contentlayer, mdx, resume utilities)
├─ content/... (blog + projects MDX)
├─ data/resume.json
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
  - `staggerContainer`
  - `scaleIn`
  - `hoverGlow`
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

Use `/content/blog/*.mdx` and `/content/projects/*.mdx`.

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