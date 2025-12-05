import { type Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects covering React, .NET, Azure, and full-stack development.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    url: 'https://federicomarchetti.dev/projects',
    title: 'Projects | Federico Marchetti',
    description: 'Selected projects covering React, .NET, Azure, and full-stack development.',
  },
  twitter: {
    title: 'Projects | Federico Marchetti',
    description: 'Selected projects covering React, .NET, Azure, and full-stack development.',
    card: 'summary_large_image',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
