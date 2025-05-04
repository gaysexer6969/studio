import { Section } from "./ui/section";
import { Code, CircleDot, Database, Container, Table, Cog, Bot, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Import Badge component

const skills = [
  "Rust", "Python", "Node.js", "TensorFlow",
  "MongoDB", "PostgreSQL", "Pandas", "Docker"
];

// Define icons using lucide components where possible, fallback gracefully
// Using CircleDot as a generic placeholder if a specific icon isn't available or suitable
// Use muted-foreground for consistent icon color within the skill boxes
const skillIcons: Record<string, React.ReactNode> = {
  Rust: <Cog className="h-4 w-4 mr-1.5 text-muted-foreground" />, // Added margin
  Python: <Bot className="h-4 w-4 mr-1.5 text-muted-foreground" />,
  "Node.js": <CircleDot className="h-4 w-4 mr-1.5 text-muted-foreground" />, // Using CircleDot as Node.js doesn't have a direct Lucide icon
  TensorFlow: <BrainCircuit className="h-4 w-4 mr-1.5 text-muted-foreground" />,
  MongoDB: <Database className="h-4 w-4 mr-1.5 text-muted-foreground" />, // Generic Database icon
  PostgreSQL: <Database className="h-4 w-4 mr-1.5 text-muted-foreground" />, // Generic Database icon
  Pandas: <Table className="h-4 w-4 mr-1.5 text-muted-foreground" />,
  Docker: <Container className="h-4 w-4 mr-1.5 text-muted-foreground" />
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-16 bg-transparent"> {/* Keep padding */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-10"> {/* Increased bottom margin */}
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Ensure Code icon uses primary color */}
          <Code className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">Skills</h2>
          <hr className="w-16 border-t border-border my-1 mx-auto" /> {/* Use border-border */}
        </div>
      </div>
      {/* Use flexbox wrap for better responsiveness and centering */}
      <div className="flex flex-wrap justify-center gap-3 px-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline" // Use outline variant for consistency
            className="flex items-center justify-center px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-default" // Removed shadow-sm for a flatter look
          >
            {/* Robust icon handling: Fallback to CircleDot if specific icon is missing */}
            {skillIcons[skill] ?? <CircleDot className="h-4 w-4 mr-1.5 text-muted-foreground" />}
            <span>{skill}</span> {/* Ensure text is wrapped */}
          </Badge>
        ))}
      </div>
    </Section>
  );
};
