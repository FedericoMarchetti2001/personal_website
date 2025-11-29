📄 VIBECODE_PROMPT.md
# VIBECODE — FEDERICO MARCHETTI PERSONAL WEBSITE BUILDER  
## Master Prompt for the AI Developer Agent  
*(React + Next.js 14 App Router + Tailwind CSS + Chakra UI + Contentlayer + Framer Motion + React Three Fiber)*

---

## 🎯 GOAL

You are the vibecoding engine responsible for generating a **beautiful, animated, modern, personal website** for **Federico Marchetti**, Full-Stack Developer (React, .NET, Azure).

Your output MUST follow the architecture and principles in `AI_CONTEXT.md`.

Your tasks:

1. **Generate all pages, components, hooks, and utilities.**
2. **Build a vivid animated landing page** with interactive 3D background.
3. **Implement MDX blog** using Contentlayer.
4. **Implement MDX project gallery** using Contentlayer.
5. **Implement a JSON-driven resume** that pulls all data from one file.
6. **Create a complete component system** using Tailwind + Chakra UI.
7. **Integrate motion** via Framer Motion (smart defaults required).
8. **Integrate 3D experience** via React Three Fiber + Drei (interactive + mouse-responsive).
9. **Ensure fully responsive design** (mobile-first).
10. **Apply light/dark theme switch** using Chakra UI’s color mode.
11. **Respect the design system** defined in `AI_CONTEXT.md`.
12. **Finalize a cohesive, polished, production-ready website** deployable on Vercel.

---

## 🧱 PROJECT STRUCTURE

Follow exactly:



src/
├─ app/
│ ├─ layout.tsx
│ ├─ page.tsx
│ ├─ blog/
│ │ ├─ page.tsx
│ │ └─ [slug]/page.tsx
│ ├─ projects/
│ │ ├─ page.tsx
│ │ └─ [slug]/page.tsx
│ ├─ resume/page.tsx
│ ├─ contact/page.tsx
│ └─ api/contact/route.ts
├─ components/
│ ├─ ui/ (chakra-wrapped)
│ ├─ motion/ (framer variants)
│ ├─ three/ (r3f scenes)
│ ├─ layout/ (navbar, footer)
│ └─ sections/ (hero, about, featured)
├─ lib/
│ ├─ contentlayer.ts
│ ├─ mdx.ts
│ └─ resume.ts
├─ content/
│ ├─ blog/ (MDX)
│ └─ projects/ (MDX)
├─ data/
│ └─ resume.json
├─ styles/
│ └─ globals.css
├─ theme/
│ └─ index.ts (chakra theme)
└─ public/
└─ assets/


---

## 🎨 DESIGN REQUIREMENTS

Use the vivid palette:

- **Indigo** → primary
- **Pink** → accent
- **Teal** → secondary highlight
- Tailwind + Chakra tokens must reflect this palette.

Fonts:
- `"Inter"` for body  
- `"Space Grotesk"` for headings  
- `"JetBrains Mono"` for code blocks in blog posts  

Dark/light mode:
- Must always look equally beautiful.
- Neon glows adapt to theme.

---

## 🌀 HERO SECTION REQUIREMENTS

Your task:

- Full-screen hero.
- 3D interactive background using R3F:
  - Default: smooth waves / noise surface
  - Mouse-parallax movement
  - Vivid light sources that follow the cursor
  - Reduced-motion mode: static gradient only
- Framer Motion fade/slide-in text:
  - “Federico Marchetti”
  - Subtitle: “Full-Stack Developer • React • .NET • Azure”
- CTA buttons:
  - View Projects
  - Read Blog
  - Download Resume (PDF)

---

## 📚 BLOG SYSTEM REQUIREMENTS (Contentlayer)

- MDX posts under `/content/blog/*.mdx`
- Generate static pages for each post
- List page with:
  - title
  - description
  - tags
  - publish date
  - animated cards

---

## 💼 PROJECTS SYSTEM REQUIREMENTS (Contentlayer)

- MDX files under `/content/projects/*.mdx`
- Metadata fields:
  - title
  - summary
  - tags
  - year
  - technologies
  - coverImage
  - github
  - link

Cards must be animated using Framer Motion.

---

## 📄 RESUME REQUIREMENTS

- Use `/data/resume.json`
- Sections:
  - Summary (derived from CV)
  - Experience
  - Skills
  - Certifications
  - Languages
  - Education
- Layout:
  - Two-column responsive
  - Animated section titles
  - Chakra Cards + Tailwind spacing

---

## 📬 CONTACT FORM REQUIREMENTS

- React Hook Form + Zod
- Fields:
  - name
  - email
  - message
- Formspree or custom Next.js API route
- Framer Motion validation feedback

---

## ♿ ACCESSIBILITY REQUIREMENTS

- Fully keyboard accessible
- Prefers reduced motion support
- Chakra UI landmark roles
- High contrast ensured

---

## 🚀 DEPLOYMENT

Must be deployable instantly on Vercel.

---

## 🎯 MISSION

Produce:

- Complete Next.js code
- All components
- All pages
- All styles
- All R3F scenes
- All Framer variants
- All MDX samples
- All utilities
- Theme configuration
- Resume JSON
- SEO metadata

Follow everything in `AI_CONTEXT.md`.

Do not skip steps.  
Do not simplify.  
Vibecode at maximum quality.
