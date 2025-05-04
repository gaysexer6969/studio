import { Section } from "./ui/section";
import { User } from "lucide-react";

export const About = () => {
  return (
    <Section
      id="about"
      className="py-8 flex justify-center items-center bg-transparent" // Adjusted padding
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-1 text-center">
          {/* Ensure User icon uses primary text color */}
          <User className="h-9 w-9 mb-2 text-primary" />
          <h2 className="text-2xl font-bold mb-1">About Me</h2>
          <hr className="w-16 border-t border-border my-1 mx-auto" /> {/* Use border-border */}
        </div>
        <p className="text-muted-foreground text-base leading-relaxed mt-4 text-center"> {/* Use text-muted-foreground */}
          I do weird shit.
        </p>
      </div>
    </Section>
  );
};
