import { useReveal } from "../hooks/use-reveal";

type Project = {
  number: string;
  title: string;
  text: string;
  tags: string;
};

export function ProjectRow({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="project-row reveal group grid gap-4 border-b border-border py-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:gap-8"
    >
      <span className="text-xs text-primary">{project.number}</span>
      <h3 className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
        {project.title}
      </h3>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{project.text}</p>
      <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{project.tags}</span>
    </article>
  );
}
