import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

// Define the Blog post schema
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true, default: [] },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.split('/').pop()}`,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    }
  },
}));

// Define the Project schema
export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    year: { type: 'number', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true, default: [] },
    technologies: { type: 'list', of: { type: 'string' }, required: true, default: [] },
    coverImage: { type: 'string', required: true }, // Path to the cover image in public/assets
    github: { type: 'string', required: false },
    link: { type: 'string', required: false }, // Live link
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/projects/${doc._raw.flattenedPath.split('/').pop()}`,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    }
  },
}));

export default makeSource({
  contentDirPath: 'src/content', // Content lives inside the src folder
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
    ],
  },
});