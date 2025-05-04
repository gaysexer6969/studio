import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';
import { format } from 'date-fns'; // For date formatting

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0 relative">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={300} // Adjust height for blog post ratio
          className="aspect-[2/1] w-full object-cover" // Use aspect ratio
          data-ai-hint={post.imageHint}
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-2 leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </CardTitle>
         <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar className="mr-1 h-3 w-3" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <CardDescription className="text-sm text-foreground/80 mb-3">{post.excerpt}</CardDescription>
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
         <Button variant="link" asChild className="text-accent p-0 h-auto">
           <Link href={`/blog/${post.slug}`}>
             Read More <ArrowRight className="ml-1 h-4 w-4" />
           </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
