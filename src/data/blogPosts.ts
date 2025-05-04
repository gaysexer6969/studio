export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string; // Format: YYYY-MM-DD
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post1',
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started-with-nextjs-15',
    date: '2024-07-20',
    excerpt: 'A comprehensive guide to setting up your first Next.js 15 project, covering the basics and new features.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    imageHint: 'coding laptop screen',
    tags: ['Next.js', 'Web Development', 'React', 'JavaScript'],
  },
  {
    id: 'post2',
    title: 'Mastering Tailwind CSS for Modern UI Design',
    slug: 'mastering-tailwind-css',
    date: '2024-06-15',
    excerpt: 'Explore the power of utility-first CSS with Tailwind. Learn tips and tricks for building beautiful interfaces quickly.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    imageHint: 'css code editor',
    tags: ['Tailwind CSS', 'CSS', 'UI Design', 'Frontend'],
  },
  {
    id: 'post3',
    title: 'The Importance of Server Components in React',
    slug: 'importance-of-server-components',
    date: '2024-05-10',
    excerpt: 'Dive deep into React Server Components (RSC) and understand how they improve performance and developer experience.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    imageHint: 'server room data center',
    tags: ['React', 'Server Components', 'Performance', 'Web Development'],
  },
];
