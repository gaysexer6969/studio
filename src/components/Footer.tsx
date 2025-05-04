
import { Section } from "./ui/section";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator"; // Import Separator

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      id="footer"
      className="py-6 bg-transparent text-center border-t border-border" // Add top border
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Nilay D. Shenai. All rights reserved.
        </p>
        <div className="flex gap-3">
           <Button
            variant="ghost" // Use ghost variant for subtle look
            size="icon"
            className="text-muted-foreground hover:text-foreground transform transition-colors duration-300"
            asChild
          >
            <a href="https://github.com/NilayShenai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost" // Use ghost variant
            size="icon"
            className="text-muted-foreground hover:text-foreground transform transition-colors duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/nilay-shenai-7b5211183/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
