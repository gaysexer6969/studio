import { blogPosts } from '@/data/blogPosts';
import { BlogPostCard } from './BlogPostCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BlogSection() {
  // Display only the latest 3 posts on the homepage
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        {blogPosts.length > 3 && (
           <div className="text-center">
              <Button asChild size="lg">
                  <Link href="/blog">View All Posts</Link>
              </Button>
           </div>
        )}
      </div>
    </section>
  );
}
