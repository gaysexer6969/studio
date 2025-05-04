
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#121620] text-white antialiased">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
