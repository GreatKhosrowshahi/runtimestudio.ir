const technologies = [
  "React", "Next.js", "TypeScript", "Node.js",
  "React Native", "PostgreSQL", "Tailwind CSS", "Python",
  "Docker", "AWS", "GraphQL", "Redis"
];

export const TechMarquee = () => {
  return (
    <section className="py-12 bg-surface-overlay border-y border-border/50 overflow-hidden en">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent to-surface-overlay z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-surface-overlay z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-6 py-3 rounded-xl bg-card border border-white/5 text-muted-foreground font-black text-[10px] uppercase tracking-widest hover:text-primary hover:border-primary/50 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
