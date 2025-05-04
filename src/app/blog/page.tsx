import { blogPosts } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/BlogPostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Nilay Shenai',
  description: 'Read the latest articles and insights from Nilay Shenai.',
};

export default function BlogListPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="blog-list" className="py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Blog</h1>
        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No blog posts yet. Stay tuned!</p>
        )}
      </div>
    </section>
  );
}
