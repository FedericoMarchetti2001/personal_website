Run dev server: npm run dev
Add images: Place project cover images (1200x600px) in /public/assets/projects/
Add resume PDF: Place at /public/Federico_Marchetti_Resume.pdf
Update personal info: Edit resume.json and social links in Footer/Navbar
Deploy to Vercel: Push to GitHub and import to Vercel

# Federico Marchetti - Personal Website

A modern, vibecoded personal website built with Next.js 16, React Three Fiber, Chakra UI, and Contentlayer.

## 🚀 Features

- **Interactive 3D Hero Section** - React Three Fiber with mouse-reactive animations
- **MDX-Powered Blog** - Write blog posts in MDX with syntax highlighting
- **Project Showcase** - Display your portfolio projects with rich media
- **Dynamic Resume** - JSON-driven resume with automatic layout
- **Contact API** - `POST /api/contact` validates input with Zod (email delivery is still a TODO; no UI form exists yet)
- **Dark Mode** - Full dark/light theme support with Chakra UI
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - WCAG compliant with reduced motion support
- **SEO Optimized** - Automatic sitemap and metadata generation
- **Type-Safe** - Built with TypeScript for reliability

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Chakra UI** - Component library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations and transitions
- **React Three Fiber** - 3D graphics with Three.js

### Content Management
- **Contentlayer** - Type-safe content management
- **MDX** - Write JSX in Markdown
- **Rehype/Remark** - Markdown processing plugins

### Developer Experience
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/FedericoMarchetti2001/personal-website.git
cd personal-website

# Install dependencies (.npmrc sets legacy-peer-deps because next-contentlayer peers on Next 12/13)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── resume/            # Resume page
│   └── api/contact/       # Contact API route (Zod validation, email TODO)
├── components/            # React components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About
│   ├── motion/           # Framer Motion variants
│   ├── blog/             # Blog UI (LinkedIn embed cards, navigation)
│   └── three/            # R3F 3D components
├── config/               # blogSources.ts
├── content/              # MDX content
│   └── projects/        # Project pages (Contentlayer `Project`)
├── data/                # Static data
│   ├── resume.json      # Resume data
│   └── linkedinPosts.ts # LinkedIn posts shown on the blog page
├── hooks/               # useBlogContent
├── lib/                 # Utilities
│   ├── contentlayer.ts  # Content helpers
│   ├── mdx.ts           # MDX components
│   └── resume.ts        # Resume utilities
├── styles/              # Global styles
│   └── globals.css      # Tailwind & custom CSS
└── theme/               # Chakra UI theme
    └── index.ts         # Theme configuration
```

## 📝 Content Management

### Adding Blog Posts

The `Blog` document type (`contentlayer.config.ts`) reads `src/content/blog/*.mdx`; that folder does not exist yet (old posts are in `archived-blog/`, not processed). Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
date: "2024-03-15"
tags: ["React", "Next.js"]
---

# Your Content Here

Write your blog post content in MDX format.
```

### Adding Projects

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
summary: "Project description"
year: 2024
tags: ["Web App"]
technologies: ["React", "Node.js"]
coverImage: "/assets/projects/cover.jpg"
github: "https://github.com/user/repo"
link: "https://demo.example.com"
---

# Project Details

Describe your project here.
```

### Updating Resume

Edit `src/data/resume.json` with your information:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "summary": "Your summary",
  "experience": [...],
  "skills": [...],
  ...
}
```

## 🎨 Customization

### Theme Colors

Edit `src/theme/index.ts` to customize colors:

```typescript
colors: {
  primary: { /* Indigo shades */ },
  accent: { /* Pink shades */ },
  secondary: { /* Teal shades */ },
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`:
- **Body**: Inter
- **Headings**: Space Grotesk  
- **Code**: JetBrains Mono

### 3D Scene

Customize the 3D background in `src/components/three/Scene.tsx`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Scripts

`npm run dev` / `build` (both run `scripts/contentlayer-build.mjs` first), `start`, `lint` (`eslint .`), `type-check` (`tsc --noEmit`), `refresh` (regenerate Contentlayer output).

### Build Locally

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Environment Variables

The code currently reads no environment variables. Planned/optional settings:

```env
# Optional: Email service for contact form
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📄 License

MIT License - feel free to use this template for your own website!

## 🤝 Contributing

Contributions are welcome! Please open an issue or PR.

## 📧 Contact

- **Website**: [federicomarchetti.dev](https://federicomarchetti.dev)
- **GitHub**: [@federicomarchetti](https://github.com/FedericoMarchetti2001)
- **LinkedIn**: [Federico Marchetti](https://linkedin.com/in/federicomarchetti)
- **Email**: federico.marchetti@example.com

---

Built with ❤️ using Next.js, React Three Fiber, and Chakra UI
