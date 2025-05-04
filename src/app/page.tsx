
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-[hsl(222.2,84%,2.9%)] text-foreground antialiased">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
