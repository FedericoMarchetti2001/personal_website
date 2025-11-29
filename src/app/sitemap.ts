import { MetadataRoute } from 'next';
import { allBlogs, allProjects } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://federicomarchetti.dev';

  // Static pages
  const routes = ['', '/blog', '/projects', '/resume', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogs = allBlogs.map((blog) => ({
    url: `${baseUrl}${blog.url}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Projects
  const projects = allProjects.map((project) => ({
    url: `${baseUrl}${project.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogs, ...projects];
}
