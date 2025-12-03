import resumeData from '@/data/resume.json';

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Language {
  name: string;
  proficiency: string;
  credentialUrls?: { url: string; label?: string }[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: Certification[];
  languages: Language[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    website?: string;
  };
}

/**
 * Get resume data
 */
export function getResumeData(): ResumeData {
  return resumeData as ResumeData;
}

/**
 * Get all skills as a flat array
 */
export function getAllSkills(): string[] {
  const resume = getResumeData();
  return resume.skills.flatMap((category) => category.items);
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: string): string[] {
  const resume = getResumeData();
  const skillCategory = resume.skills.find((s) => s.category === category);
  return skillCategory ? skillCategory.items : [];
}
