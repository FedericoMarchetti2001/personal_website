Run dev server: npm run dev
Add images: Place project cover images (1200x600px) in /public/assets/projects/
Add resume PDF: Place at /public/Federico_Marchetti_Resume.pdf
Update personal info: Edit resume.json and social links in Footer/Navbar
Deploy to Vercel: Push to GitHub and import to Vercel

# Federico Marchetti - Personal Website

A modern, vibecoded personal website built with Next.js 14, React Three Fiber, Chakra UI, and Contentlayer.

## 🚀 Features

- **Interactive 3D Hero Section** - React Three Fiber with mouse-reactive animations
- **MDX-Powered Blog** - Write blog posts in MDX with syntax highlighting
- **Project Showcase** - Display your portfolio projects with rich media
- **Dynamic Resume** - JSON-driven resume with automatic layout
- **Contact Form** - React Hook Form with Zod validation
- **Dark Mode** - Full dark/light theme support with Chakra UI
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - WCAG compliant with reduced motion support
- **SEO Optimized** - Automatic sitemap and metadata generation
- **Type-Safe** - Built with TypeScript for reliability

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
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
git clone https://github.com/federicomarchetti/personal-website.git
cd personal-website

# Install dependencies
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
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About
│   ├── motion/           # Framer Motion variants
│   ├── three/            # R3F 3D components
│   └── ui/               # Reusable UI components
├── content/              # MDX content
│   ├── blog/            # Blog posts
│   └── projects/        # Project pages
├── data/                # Static data
│   └── resume.json      # Resume data
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

Create a new `.mdx` file in `src/content/blog/`:

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

Create a `.env.local` file:

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
- **GitHub**: [@federicomarchetti](https://github.com/federicomarchetti)
- **LinkedIn**: [Federico Marchetti](https://linkedin.com/in/federicomarchetti)
- **Email**: federico.marchetti@example.com

---

Built with ❤️ using Next.js, React Three Fiber, and Chakra UI
