import { Section } from "./ui/section";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Papers, Please",
    description: "Improved archive for MIT Manipal past papers.",
    url: "https://papers.000196.xyz/"
  },
  {
    title: "English-to-Bhojpuri Translator",
    description: "mBART model trained on a custom-built dataset.",
    url: "https://github.com/NilayShenai/English-to-Bhojpuri-Translator"
  },
  {
    title: "MehuLinux",
    description: "Lightweight Linux-From-Scratch system with a minimal setup.",
    url: "https://github.com/NilayShenai/MehuLinux"
  },
  {
    title: "BiGaSS",
    description: "Bidirectional Gapping Swap Sort algorithm.",
    url: "https://github.com/NilayShenai/BiGaSS"
  },
  {
    title: "Tarkus",
    description: "OSDEV Project.",
    url: "https://github.com/NilayShenai/Tarkus"
  },
  {
    title: "FARTCHAN",
    description: "Flask-Accelerated Replicated Transaction Chain and Hashing Algorithm Network.",
    url: "https://github.com/NilayShenai/fartchan"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="py-16 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-8">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Main section icon */}
          <FolderGit2 className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">Projects</h2>
          <hr className="w-16 border-t border-border my-1 mx-auto" />
        </div>
      </div>
      {/* Simplified grid layout for project cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-md px-4 py-3 flex flex-col gap-1 transition-all duration-150 ease-in-out hover:bg-accent hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-card-foreground group hover:scale-105 transform" // Added hover:scale-105 and transform
          >
            {/* Simplified project card content */}
            <div className="flex items-center justify-between">
              {/* Removed redundant icon, Title only */}
              <span className="font-semibold">{project.title}</span>
              {/* External link icon, appears on hover/focus */}
              <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            {/* Description */}
            <span className="text-muted-foreground text-sm">{project.description}</span>
          </a>
        ))}
      </div>
    </Section>
  );
};
