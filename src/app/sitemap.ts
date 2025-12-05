import { MetadataRoute } from 'next';
import { allBlogs, allProjects } from 'contentlayer/generated';

const BASE_URL = 'https://federicomarchetti.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages that actually exist
  const routes = ['', '/blog', '/projects', '/resume'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now.toISOString(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts ordered with their authored date
  const blogs = allBlogs.map((blog) => ({
    url: `${BASE_URL}${blog.url}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Projects use the year as an approximation of last modification
  const projects = allProjects.map((project) => ({
    url: `${BASE_URL}${project.url}`,
    lastModified: new Date(project.year, 0, 1).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogs, ...projects];
}
