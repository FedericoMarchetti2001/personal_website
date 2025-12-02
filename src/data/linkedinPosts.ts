export type LinkedInPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO format YYYY-MM-DD
  linkedinUrl: string;
  embedUrl: string; // The embed iframe src URL
  tags: string[];
  category?: string;
};

// To get the embedUrl:
// 1. Go to your LinkedIn post
// 2. Click "..." menu → "Embed this post"
// 3. Copy the iframe src URL (e.g., https://www.linkedin.com/embed/feed/update/urn:li:share:123456)
// 4. Paste it as embedUrl below

export const linkedInPosts: LinkedInPost[] = [
  // Example post - replace with your actual posts
  {
    id: 'post-1',
    title: 'Teaching technical terminology in German',
    excerpt: 'Sharing my experience building scalable applications with React, .NET, and Azure.',
    date: '2025-11-15',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_not-the-usual-clickbaity-post-written-with-activity-7393739374707871744-UEbw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7393739371767693312?collapsed=1',
    tags: ['German', 'Career', 'Development'],
    category: 'Career',
  },
    {
    id: 'post-1',
    title: 'Teaching technical terminology in German',
    excerpt: 'Sharing my experience building scalable applications with React, .NET, and Azure.',
    date: '2025-11-15',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_github-sharexsharex-sharex-is-a-free-activity-7340123611971661824-83ya?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7340113037539848192?collapsed=1',
    tags: ['German', 'Career', 'Development'],
    category: 'Career',
  },
    {
    id: 'post-1',
    title: 'Teaching technical terminology in German',
    excerpt: 'Sharing my experience building scalable applications with React, .NET, and Azure.',
    date: '2025-11-15',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_hi-everyone-i-thought-id-finally-start-activity-7333908242655326208-0Vzk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7333908241728385027?collapsed=1',
    tags: ['German', 'Career', 'Development'],
    category: 'Career',
  },
    {
    id: 'post-1',
    title: 'Teaching technical terminology in German',
    excerpt: 'Sharing my experience building scalable applications with React, .NET, and Azure.',
    date: '2025-11-15',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_i-still-have-to-figure-out-why-after-two-activity-7391598239982088192-c6-U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7391598237209694208?collapsed=1',
    tags: ['German', 'Career', 'Development'],
    category: 'Career',
  },
  // Add more posts here following the same structure
];
