import { blogPosts, BlogPost } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Function to get post data based on slug
async function getPostData(slug: string): Promise<BlogPost | undefined> {
  // In a real app, you might fetch this from a CMS or database
  return blogPosts.find((post) => post.slug === slug);
}

// Generate static paths for blog posts at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Nilay Shenai Blog`,
    description: post.excerpt,
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Show a 404 page if the post doesn't exist
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
       <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md"
          data-ai-hint={post.imageHint}
          priority // Load image faster on post page
        />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{post.title}</h1>
      <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
        <div className="flex items-center">
          <Calendar className="mr-1.5 h-4 w-4" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Placeholder for actual blog post content */}
      {/* In a real application, this would likely be fetched Markdown/MDX content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>{post.excerpt}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Subsection Title</h2>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
        </p>
         <pre><code className="language-javascript">{`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
          `}</code></pre>
        <p>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
        </p>
      </div>
    </article>
  );
}
