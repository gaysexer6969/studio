import { Section } from "./ui/section";
import { Code, CircleDot, Database, Container, Table, Cog, Bot, BrainCircuit } from "lucide-react"; // Added more specific icons

const skills = [
  "Rust", "Python", "Node.js", "TensorFlow",
  "MongoDB", "PostgreSQL", "Pandas", "Docker"
];

// Define icons using lucide components where possible, fallback gracefully
// Using CircleDot as a generic placeholder if a specific icon isn't available or suitable
// Use muted-foreground for consistent icon color within the skill boxes
const skillIcons: Record<string, React.ReactNode> = {
  Rust: <Cog className="h-4 w-4 text-muted-foreground" />, // Using Cog for Rust
  Python: <Bot className="h-4 w-4 text-muted-foreground" />, // Placeholder for Python
  "Node.js": <CircleDot className="h-4 w-4 text-muted-foreground" />, // Placeholder
  TensorFlow: <BrainCircuit className="h-4 w-4 text-muted-foreground" />, // Using BrainCircuit for TF
  MongoDB: <Database className="h-4 w-4 text-muted-foreground" />, // Using Database
  PostgreSQL: <Database className="h-4 w-4 text-muted-foreground" />, // Using Database
  Pandas: <Table className="h-4 w-4 text-muted-foreground" />, // Using Table for Pandas
  Docker: <Container className="h-4 w-4 text-muted-foreground" /> // Using Container for Docker
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-16 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-8">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Ensure Code icon uses primary color */}
          <Code className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">Skills</h2>
          <hr className="w-16 border-t border-border my-1 mx-auto" /> {/* Use border-border */}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center px-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-border rounded text-sm text-foreground bg-card shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground" // Use theme variables
          >
            {/* Robust icon handling: Fallback to CircleDot if specific icon is missing */}
            {skillIcons[skill] ?? <CircleDot className="h-4 w-4 text-muted-foreground" />}
            <span>{skill}</span> {/* Ensure text is wrapped */}
          </div>
        ))}
      </div>
    </Section>
  );
};
