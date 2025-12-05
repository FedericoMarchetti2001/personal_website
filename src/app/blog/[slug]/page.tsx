import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { getBlogBySlug } from '@/lib/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import Script from 'next/script';

type BlogPageParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }: BlogPageParams): Metadata {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog post not found',
    };
  }

  const url = `https://federicomarchetti.dev${blog.url}`;

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: blog.url,
    },
    openGraph: {
      type: 'article',
      url,
      title: blog.title,
      description: blog.description,
      publishedTime: new Date(blog.date).toISOString(),
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPageParams) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const url = `https://federicomarchetti.dev${blog.url}`;

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.description,
    datePublished: new Date(blog.date).toISOString(),
    dateModified: new Date(blog.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Federico Marchetti',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    keywords: blog.tags,
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
        name: 'Blog',
        item: 'https://federicomarchetti.dev/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <Script
        id={`ld-blog-${blog.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleStructuredData, breadcrumbStructuredData]) }}
      />
      <BlogPostClient blog={blog} />
    </>
  );
}
