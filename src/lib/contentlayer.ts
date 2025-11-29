import { allBlogs, allProjects } from 'contentlayer/generated';
import { Blog, Project } from 'contentlayer/generated';

// --- Blog Utilities ---

export function allSortedBlogs(): Blog[] {
  return allBlogs.sort((a: Blog, b: Blog) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return allBlogs.find((blog: Blog) => blog.slug === slug);
}

// --- Project Utilities ---

export function allSortedProjects(): Project[] {
  // Sort by year descending
  return allProjects.sort((a: Project, b: Project) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project: Project) => project.slug === slug);
}