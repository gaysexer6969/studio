
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
// Removed Footer import

export default function Home() {
  return (
    <main className="min-h-screen text-foreground antialiased main-gradient">
      <Hero />
      <About />
      <Skills /> {/* Moved Skills before Projects */}
      <Projects />
      {/* Removed Footer component */}
    </main>
  );
}
