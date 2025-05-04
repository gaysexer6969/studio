import { Section } from "./ui/section";
import { Code, CircleDot } from "lucide-react";

const skills = [
  "Rust", "Python", "Node.js", "TensorFlow", // Corrected casing
  "MongoDB", "PostgreSQL", "Pandas", "Docker" // Corrected casing
];

// Define icons using lucide components where possible, fallback gracefully
// Using CircleDot as a generic placeholder if a specific icon isn't available or suitable
const skillIcons: Record<string, React.ReactNode> = {
  Rust: <CircleDot className="h-4 w-4 text-orange-500" />, // Example color, consider theme vars if needed
  Python: <CircleDot className="h-4 w-4 text-blue-500" />,
  "Node.js": <CircleDot className="h-4 w-4 text-green-500" />,
  TensorFlow: <CircleDot className="h-4 w-4 text-orange-600" />,
  MongoDB: <CircleDot className="h-4 w-4 text-green-600" />,
  PostgreSQL: <CircleDot className="h-4 w-4 text-blue-700" />,
  Pandas: <CircleDot className="h-4 w-4 text-indigo-400" />,
  Docker: <CircleDot className="h-4 w-4 text-blue-400" />
  // Consider adding more specific icons from lucide-react if available and appropriate
  // e.g., Database for PostgreSQL/MongoDB, Container for Docker
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-16 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-8">
        <div className="flex flex-col items-center gap-2 text-center">
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
