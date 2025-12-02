import { linkedInPosts } from '@/data/linkedinPosts';
import { allSortedBlogs } from '@/lib/contentlayer';

export type UnifiedBlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  url: string;
  tags: string[];
  source: 'linkedin' | 'blog';
  
  // LinkedIn-specific fields
  linkedinUrl?: string;
  embedUrl?: string;
  
  // Blog-specific fields
  slug?: string;
  description?: string;
};

export function useBlogContent(source: 'linkedin' | 'blog'): UnifiedBlogPost[] {
  if (source === 'linkedin') {
    return linkedInPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        date: new Date(post.date),
        url: post.linkedinUrl,
        tags: post.tags,
        source: 'linkedin',
        linkedinUrl: post.linkedinUrl,
        embedUrl: post.embedUrl,
      }));
  }
  
  // Traditional blog posts from Contentlayer
  return allSortedBlogs().map(blog => ({
    id: blog.slug,
    title: blog.title,
    excerpt: blog.description,
    date: new Date(blog.date),
    url: blog.url,
    tags: blog.tags,
    source: 'blog',
    slug: blog.slug,
    description: blog.description,
  }));
}
