

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground antialiased main-gradient">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Removed <h1>Test Page - Build Check</h1> */}
    </main>
  );
}
