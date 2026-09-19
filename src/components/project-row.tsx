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
      className="glass-card reveal flex h-full flex-col gap-4 p-7"
    >
      <span className="text-xs text-primary">{project.number}</span>
      <h3 className="font-display text-2xl md:text-3xl">{project.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.split(" · ").map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
