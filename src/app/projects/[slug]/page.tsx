import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { getProjectBySlug } from '@/lib/contentlayer';
import ProjectPageClient from './ProjectPageClient';
import Script from 'next/script';

type ProjectPageParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageParams): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  const url = `https://federicomarchetti.dev${project.url}`;
  const approxDate = new Date(project.year, 0, 1).toISOString();

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: project.url,
    },
    openGraph: {
      type: 'article',
      url,
      title: project.title,
      description: project.summary,
      publishedTime: approxDate,
      tags: [...project.tags, ...project.technologies],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageParams) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const url = `https://federicomarchetti.dev${project.url}`;
  const approxDate = new Date(project.year, 0, 1).toISOString();

  const projectStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: project.title,
    name: project.title,
    description: project.summary,
    url,
    datePublished: approxDate,
    author: {
      '@type': 'Person',
      name: 'Federico Marchetti',
    },
    inLanguage: 'en',
    keywords: [...project.tags, ...project.technologies],
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://federicomarchetti.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://federicomarchetti.dev/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <Script
        id={`ld-project-${project.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([projectStructuredData, breadcrumbStructuredData]) }}
      />
      <ProjectPageClient project={project} />
    </>
  );
}
