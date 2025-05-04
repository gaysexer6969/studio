import { AboutMe } from '@/components/AboutMe';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { BlogSection } from '@/components/BlogSection';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Hero Section (Optional - can be added later if needed) */}
      {/* <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Nilay Shenai</h1>
        <p className="text-xl text-muted-foreground">Software Developer | Innovator | Lifelong Learner</p>
      </section> */}

      <AboutMe />
      <ProjectShowcase />
      <BlogSection />
      <ContactForm />
    </>
  );
}
