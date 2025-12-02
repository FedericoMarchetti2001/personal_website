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
  {
    id: 'post-1',
    title: 'Learning Technical German the Hard Way',
    excerpt: 'My journey from C1 certificate to realizing daily German doesn\'t equal tech German - and what I\'m doing about it.',
    date: '2025-01-20',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_not-the-usual-clickbaity-post-written-with-activity-7393739374707871744-UEbw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7393739371767693312?collapsed=1',
    tags: ['German', 'Career', 'Learning', 'Switzerland'],
    category: 'Career',
  },
  {
    id: 'post-2',
    title: 'ShareX: My Favorite Time-Saving Tool',
    excerpt: 'Stop typing bug descriptions. Record, upload, and share videos automatically with one shortcut.',
    date: '2024-08-10',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_github-sharexsharex-sharex-is-a-free-activity-7340123611971661824-83ya?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7340113037539848192?collapsed=1',
    tags: ['Productivity', 'Tools', 'Workflow'],
    category: 'Tech',
  },
  {
    id: 'post-3',
    title: 'TabExtend Pro for Better Browser Organization',
    excerpt: 'How I manage multiple projects and keep Chrome organized with TabExtend - worth the $7/month.',
    date: '2024-07-25',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_hi-everyone-i-thought-id-finally-start-activity-7333908242655326208-0Vzk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7333908241728385027?collapsed=1',
    tags: ['Productivity', 'Tools', 'Organization'],
    category: 'Tech',
  },
  {
    id: 'post-4',
    title: 'Why I Should Actually Use Azure DevOps Backlogs',
    excerpt: 'Two years in and still not using Boards properly. Time to fix that for better knowledge sharing.',
    date: '2025-01-13',
    linkedinUrl: 'https://www.linkedin.com/posts/federico-marchetti-dev_i-still-have-to-figure-out-why-after-two-activity-7391598239982088192-c6-U?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrjSS4BuBOfNAwA04lQG_F2snGirGafgGQ',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7391598237209694208?collapsed=1',
    tags: ['Azure DevOps', 'Project Management', 'Workflow'],
    category: 'Tech',
  },
  // Add more posts here following the same structure
];
