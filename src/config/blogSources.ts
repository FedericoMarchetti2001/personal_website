import { FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type BlogSource = {
  id: 'linkedin' | 'blog';
  label: string;
  description: string;
  icon: IconType;
  color: string;
  enabled: boolean;
};

export const BLOG_SOURCES: BlogSource[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Professional insights and discussions from my LinkedIn profile',
    icon: FaLinkedin,
    color: 'blue.500',
    enabled: true,
  },
  {
    id: 'blog',
    label: 'Articles',
    description: 'In-depth technical articles, tutorials, and insights',
    icon: FaFileAlt,
    color: 'purple.500',
    enabled: true,
  },
];
