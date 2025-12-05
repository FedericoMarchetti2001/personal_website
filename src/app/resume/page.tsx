import { type Metadata } from 'next';
import ResumePageClient from './ResumePageClient';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Federico Marchetti, Full-Stack Developer specializing in React, .NET, and Azure.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    url: 'https://federicomarchetti.dev/resume',
    title: 'Resume | Federico Marchetti',
    description: 'Full-Stack Developer specializing in React, .NET, and Azure.',
  },
  twitter: {
    title: 'Resume | Federico Marchetti',
    description: 'Full-Stack Developer specializing in React, .NET, and Azure.',
    card: 'summary_large_image',
  },
};

export default function ResumePage() {
  return <ResumePageClient />;
}
