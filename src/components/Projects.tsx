import { Section } from "./ui/section";
import { FolderOpen, ArrowUpRight } from "lucide-react";

const projects = [
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
          <FolderOpen className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">Projects</h2>
          <hr className="w-16 border-t border-gray-600 my-1 mx-auto" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-md px-4 py-3 flex flex-col gap-2 transition-all duration-150 ease-in-out hover:bg-white/10 hover:scale-[1.03] hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-primary opacity-80" />
                <span className="font-semibold text-white">{project.title}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-gray-400 text-sm">{project.description}</span>
          </a>
        ))}
      </div>
    </Section>
  );
};
