import { type Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest articles and curated content on full-stack development, .NET, React, Azure, and AI.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: 'https://federicomarchetti.dev/blog',
    title: 'Blog | Federico Marchetti',
    description: 'Latest posts on full-stack development, .NET, React, Azure, and AI.',
  },
  twitter: {
    title: 'Blog | Federico Marchetti',
    description: 'Latest posts on full-stack development, .NET, React, Azure, and AI.',
    card: 'summary_large_image',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
