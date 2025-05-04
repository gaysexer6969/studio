"use client"; // Add this directive for client-side interactions

import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Section } from "./ui/section";

export const Hero = () => {
  return (
    <Section className="min-h-screen flex flex-col justify-center items-center text-center space-y-8">
      <div className="space-y-6 animate-fade-in">
        <h1 className="pb-3 text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Nilay D. Shenai
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          A normal CS aficionado.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <Button
          variant="outline"
          size="lg"
          className="group bg-white/10 border-white/20 hover:bg-white/20 text-white transform transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
          <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
        </Button>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white transform transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/NilayShenai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white transform transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.linkedin.com/in/nilay-shenai-7b5211183/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
