import { Section } from "./ui/section";
import { Code, CircleDot } from "lucide-react";

const skills = [
  "Rust", "Python", "Node.js", "tensorFlow",
  "mongoDB", "PostgreSQL", "pandas", "docker"
];

const skillIcons: Record<string, JSX.Element> = {
  Rust: <CircleDot className="h-4 w-4 text-[#dea584]" />,
  Python: <CircleDot className="h-4 w-4 text-[#3776ab]" />,
  "Node.js": <CircleDot className="h-4 w-4 text-[#6cc24a]" />,
  tensorFlow: <CircleDot className="h-4 w-4 text-[#ff6f00]" />,
  mongoDB: <CircleDot className="h-4 w-4 text-[#4daa63]" />,
  PostgreSQL: <CircleDot className="h-4 w-4 text-[#336791]" />,
  pandas: <CircleDot className="h-4 w-4 text-[#c9c6f1]" />,
  docker: <CircleDot className="h-4 w-4 text-[#2496ed]" />
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-16 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <Code className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">Skills</h2>
          <hr className="w-16 border-t border-gray-600 my-1 mx-auto" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 px-4 py-3 border border-gray-700 rounded text-sm text-gray-200 justify-center"
          >
            {skillIcons[skill] ?? <CircleDot className="h-4 w-4 text-primary" />}
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
};
