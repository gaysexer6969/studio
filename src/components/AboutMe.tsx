import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
           <Image
              src="https://picsum.photos/seed/profile/300/300"
              alt="Nilay Shenai"
              width={240}
              height={240}
              className="rounded-full shadow-lg border-4 border-primary"
              data-ai-hint="professional headshot software developer"
              priority // Load profile picture faster
            />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-foreground/80 mb-6">
            Hi, I'm Nilay Shenai, a passionate software developer specializing in building modern and performant web applications. I love exploring new technologies and creating elegant solutions to complex problems. My journey in tech is driven by a constant desire to learn and innovate.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <Button asChild size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </a>
            </Button>
            <div className="flex gap-4 justify-center md:justify-start">
               <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="outline" size="icon" asChild>
                <a href="mailto:nilay.shenai@email.com" aria-label="Email Me">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
