import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Code2, Image as ImageIcon, Mail, MapPin } from "lucide-react";
import { PortfolioScene } from "../components/PortfolioScene";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Ehtesham Ul Haq — Backend Developer & Photo Editor" },
      { name: "description", content: "Portfolio of Ehtesham Ul Haq, a backend developer and photo editor based in Faisalabad, Pakistan." },
      { property: "og:title", content: "Ehtesham Ul Haq — Backend Developer & Photo Editor" },
      { property: "og:description", content: "Python, FastAPI, thoughtful systems, and warm, intentional photo editing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { number: "01", title: "Nexus", text: "A full-stack business website with an AI chatbot built to turn static browsing into useful conversation.", tags: "Full stack · AI chatbot" },
  { number: "02", title: "Admission workflow", text: "An admissions site that confirms student submissions instantly and routes categorized alerts to the HR team.", tags: "Automation · Email workflows" },
  { number: "03", title: "Universe Explorer", text: "A three-dimensional college project for exploring planets, solar systems, black holes, and galaxies.", tags: "3D · Interactive experience" },
  { number: "04", title: "FastAPI CRUD service", text: "A containerized backend with custom validation, exceptions, and a production-minded PostgreSQL connection.", tags: "Python · FastAPI · PostgreSQL · Docker" },
  { number: "05", title: "Hand-tracking controller", text: "Computer vision that turns webcam hand movements into game input instead of relying on a keyboard.", tags: "OpenCV · MediaPipe" },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] border-b border-border">
        <PortfolioScene />
        <div className="hero-vignette absolute inset-0" aria-hidden="true" />
        <header className="relative z-10 flex items-center justify-between px-5 py-6 md:px-10 lg:px-16">
          <a href="#top" className="font-display text-xl text-foreground" aria-label="Ehtesham Ul Haq, home">EUH<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
          </nav>
          <a href="mailto:ehtesham918605@gmail.com" className="inline-flex items-center gap-2 border-b border-primary pb-1 text-xs uppercase tracking-[0.16em]">
            Available for work <span className="status-dot" />
          </a>
        </header>

        <div id="top" className="relative z-10 flex min-h-[calc(92svh-84px)] flex-col justify-end px-5 pb-10 md:px-10 lg:px-16 lg:pb-14">
          <div className="mb-auto mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <MapPin size={13} /> Faisalabad, Pakistan
          </div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">Backend developer · Photo editor</p>
          <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,10.5rem)] leading-[0.78]">
            Ehtesham<br /><em className="font-normal text-primary">Ul Haq</em>
          </h1>
          <div className="mt-8 flex max-w-5xl flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I build thoughtful digital systems, then give them a visual point of view. Python and FastAPI for the logic; careful color and composition for the finish.
            </p>
            <a href="#work" className="group inline-flex shrink-0 items-center gap-3 text-sm uppercase tracking-[0.16em]">
              Explore selected work <ArrowDown className="transition-transform group-hover:translate-y-1" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <div><p className="section-label">Selected work</p><h2 className="mt-3 font-display text-5xl md:text-7xl">Systems with purpose.</h2></div>
          <span className="hidden text-sm text-muted-foreground md:block">2024 — 2026</span>
        </div>
        <div>
          {projects.map((project) => (
            <article key={project.number} className="project-row group grid gap-4 border-b border-border py-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:gap-8">
              <span className="text-xs text-primary">{project.number}</span>
              <h3 className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{project.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{project.text}</p>
              <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{project.tags}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-border bg-secondary px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Two disciplines, one standard</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">Logic in the code.<br /><em className="text-primary">Warmth in the image.</em></h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="border-t border-border pt-6">
              <Code2 className="mb-12 text-primary" size={24} strokeWidth={1.4} />
              <h3 className="font-display text-3xl">Backend systems</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Python, FastAPI, PostgreSQL, Docker, custom validation, and APIs that are built to be dependable.</p>
            </div>
            <div className="border-t border-border pt-6">
              <ImageIcon className="mb-12 text-primary" size={24} strokeWidth={1.4} />
              <h3 className="font-display text-3xl">Photo editing</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Intentional color work using Python imaging tools to bring warmth, depth, and a natural studio-quality finish.</p>
            </div>
            <div className="border-t border-border pt-6 md:col-span-2">
              <p className="text-xl leading-relaxed md:text-2xl">Currently training deeply in API programming while building independent projects around databases, automation, computer vision, and three-dimensional experiences.</p>
              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">Python · FastAPI · PostgreSQL · Docker · REST APIs · OpenCV · Pillow · NumPy</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <p className="section-label">Start a conversation</p>
        <a href="mailto:ehtesham918605@gmail.com" className="contact-link mt-8 block max-w-6xl font-display text-[clamp(3.4rem,9vw,9rem)] leading-[0.86]">
          Let’s make<br /><em className="text-primary">something useful.</em>
        </a>
        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-7 md:flex-row md:items-end">
          <div>
            <p className="max-w-md text-muted-foreground">Open to focused freelance projects in backend development and photo editing.</p>
            <a className="mt-4 inline-flex items-center gap-2 text-sm" href="mailto:ehtesham918605@gmail.com"><Mail size={16} /> ehtesham918605@gmail.com</a>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-[0.16em]">
            <a className="inline-flex items-center gap-1 hover:text-primary" href="https://wa.me/923087629734" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
            <a className="inline-flex items-center gap-1 hover:text-primary" href="https://github.com/Malikehtesham632" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
