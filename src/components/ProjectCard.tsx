import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0 relative">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-video w-full object-cover"
          data-ai-hint={project.imageHint}
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3">{project.description}</CardDescription>
         <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
