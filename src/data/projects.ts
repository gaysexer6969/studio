export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; // For AI image generation hint
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with Next.js, Tailwind CSS, and ShadCN UI. Showcasing my skills and projects.',
    imageUrl: 'https://picsum.photos/seed/proj1/600/400',
    imageHint: 'modern website design',
    liveUrl: '#', // Link to the live site itself
    repoUrl: 'https://github.com/yourusername/portfolio-website', // Replace with actual repo
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'ShadCN UI'],
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application concept with features like product browsing, cart management, and user authentication.',
    imageUrl: 'https://picsum.photos/seed/proj2/600/400',
    imageHint: 'online shopping interface',
    repoUrl: 'https://github.com/yourusername/ecommerce-app', // Replace with actual repo
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
  },
  {
    id: 'proj3',
    title: 'Task Management App',
    description: 'A simple and intuitive task management application to help users organize their daily tasks and boost productivity.',
    imageUrl: 'https://picsum.photos/seed/proj3/600/400',
    imageHint: 'to-do list application',
    liveUrl: '#', // Replace with actual demo link
    repoUrl: 'https://github.com/yourusername/task-manager', // Replace with actual repo
    tags: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
  },
   {
    id: 'proj4',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard displaying complex datasets using various chart types, built with D3.js and React.',
    imageUrl: 'https://picsum.photos/seed/proj4/600/400',
    imageHint: 'dashboard charts graphs',
    repoUrl: 'https://github.com/yourusername/data-viz-dashboard', // Replace with actual repo
    tags: ['React', 'D3.js', 'TypeScript', 'Data Visualization'],
  },
];
