
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn("py-16 px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};
