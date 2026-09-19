import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Code2, Facebook, Github, Image as ImageIcon, Instagram, Linkedin, Mail, MapPin, Sparkles, Wand2, Workflow } from "lucide-react";
import { PortfolioScene } from "../components/PortfolioScene";
import { ProjectRow } from "../components/project-row";
import { FiverrIcon, WhatsAppIcon } from "../components/social-icons";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Ehtesham Ul Haq's Portfolio" },
      { name: "description", content: "Portfolio of Ehtesham Ul Haq, a backend developer and photo editor based in Faisalabad, Pakistan." },
      { property: "og:title", content: "Ehtesham Ul Haq's Portfolio" },
      { property: "og:description", content: "Python, FastAPI, thoughtful systems, and warm, intentional photo editing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "6+", label: "Projects", sub: "Delivered" },
  { value: "8+", label: "Tools", sub: "Learned" },
  { value: "<6", label: "Months", sub: "Practicing" },
];

const focusAreas = [
  { icon: Code2, title: "Backend APIs", text: "Python and FastAPI services built to be dependable." },
  { icon: Workflow, title: "Automation", text: "Workflows that send the right email to the right person." },
  { icon: ImageIcon, title: "Photo editing", text: "Warm, intentional color work with Python imaging tools." },
  { icon: Sparkles, title: "Creative coding", text: "Computer vision and 3D experiences, built for practice." },
];

const experience = {
  role: "Student — API Programming (Python & FastAPI)",
  org: "Devigners",
  date: "2026 — Present",
  location: "Faisalabad, Pakistan",
  points: [
    "Working through a cohort-based course covering Python and FastAPI in depth, under a working instructor's guidance.",
    "Building independent projects alongside the course to practice databases, validation, and containerization.",
    "Applying what I learn directly to freelance-ready work, including automated workflows and AI-assisted features.",
  ],
};

const skills = ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs", "OpenCV", "Pillow / NumPy", "HTML, CSS, JavaScript"];

const projects = [
  { number: "01", title: "Nexus", text: "A full-stack business website with an AI chatbot built to turn static browsing into useful conversation.", tags: "Full stack · AI chatbot" },
  { number: "02", title: "Admission workflow", text: "An admissions site that confirms student submissions instantly and routes categorized alerts to the HR team.", tags: "Automation · Email workflows" },
  { number: "03", title: "Universe Explorer", text: "A three-dimensional college project for exploring planets, solar systems, black holes, and galaxies.", tags: "3D · Interactive experience" },
  { number: "04", title: "FastAPI CRUD service", text: "A containerized backend with custom validation, exceptions, and a production-minded PostgreSQL connection.", tags: "Python · FastAPI · PostgreSQL · Docker" },
  { number: "05", title: "Hand-tracking controller", text: "Computer vision that turns webcam hand movements into game input instead of relying on a keyboard.", tags: "OpenCV · MediaPipe" },
];

function Index() {
  const aboutRef = useReveal<HTMLDivElement>();
  const experienceRef = useReveal<HTMLDivElement>();
  const skillsRef = useReveal<HTMLDivElement>();
  const workRef = useReveal<HTMLDivElement>();
  const contactRef = useReveal<HTMLDivElement>();

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] border-b border-border">
        <PortfolioScene />
        <div className="hero-vignette absolute inset-0" aria-hidden="true" />
        <header className="relative z-10 flex items-center justify-between px-5 py-6 md:px-10 lg:px-16">
          <a href="#top" className="font-display text-xl text-foreground" aria-label="Ehtesham Ul Haq, home">EUH<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
            <a className="transition-colors hover:text-foreground" href="#skills">Skills</a>
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
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
            <div className="flex shrink-0 items-center gap-6 text-xs uppercase tracking-[0.16em]">
              <a href="mailto:ehtesham918605@gmail.com" className="border-b border-foreground pb-1">Get in touch</a>
              <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.linkedin.com/in/ehtesham-ul-haq-173b54288/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:text-primary" href="https://wa.me/923087629734" target="_blank" rel="noreferrer"><WhatsAppIcon size={15} /> WhatsApp</a>
            </div>
          </div>
          <a href="#about" className="group mt-10 inline-flex w-fit items-center gap-3 text-sm uppercase tracking-[0.16em]">
            Scroll <ArrowDown className="transition-transform group-hover:translate-y-1" size={17} />
          </a>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div ref={aboutRef} className="reveal">
          <p className="section-label">01 — About me</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">Logic in the code.<br /><em className="text-primary">Warmth in the image.</em></h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="font-display text-5xl text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label} · {stat.sub}</div>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Currently training deeply in API programming while building independent projects around databases, automation, computer vision, and three-dimensional experiences.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="focus-card">
                  <Icon className="mb-6 text-primary" size={22} strokeWidth={1.4} />
                  <h3 className="font-display text-2xl">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-secondary px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div ref={experienceRef} className="reveal">
          <p className="section-label">02 — Experience</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">Where I'm training right now.</h2>

          <div className="timeline-item mt-16 max-w-3xl">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-3xl md:text-4xl">{experience.role}</h3>
              <span className="text-sm text-muted-foreground">{experience.date}</span>
            </div>
            <p className="mt-1 text-sm uppercase tracking-[0.14em] text-primary">{experience.org} · {experience.location}</p>
            <ul className="mt-6 space-y-3">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted-foreground">
                  <Wand2 className="mt-1 shrink-0 text-primary" size={15} strokeWidth={1.6} />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div ref={skillsRef} className="reveal">
          <p className="section-label">03 — Skills</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">Tools I reach for.</h2>
        </div>
        <div className="marquee-row mt-16">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, i) => (
              <span key={`${skill}-${i}`} className="font-display shrink-0 text-4xl text-muted-foreground md:text-6xl">
                {skill} <span className="text-primary">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div ref={workRef} className="reveal mb-14 flex items-end justify-between border-b border-border pb-6">
          <div><p className="section-label">04 — Selected work</p><h2 className="mt-3 font-display text-5xl md:text-7xl">Systems with purpose.</h2></div>
          <span className="hidden text-sm text-muted-foreground md:block">2024 — 2026</span>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="relative px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <p className="section-label">05 — Start a conversation</p>
        <a href="mailto:ehtesham918605@gmail.com" className="contact-link mt-8 block max-w-6xl font-display text-[clamp(3.4rem,9vw,9rem)] leading-[0.86]">
          Let's make<br /><em className="text-primary">something useful.</em>
        </a>
        <div ref={contactRef} className="reveal mt-16 flex flex-col justify-between gap-8 border-t border-border pt-7 md:flex-row md:items-end">
          <div>
            <p className="max-w-md text-muted-foreground">Open to focused freelance projects in backend development and photo editing.</p>
            <a className="mt-4 inline-flex items-center gap-2 text-sm" href="mailto:ehtesham918605@gmail.com"><Mail size={16} /> ehtesham918605@gmail.com</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.16em]">
            <a className="inline-flex items-center gap-2 hover:text-primary" href="https://wa.me/923087629734" target="_blank" rel="noreferrer"><WhatsAppIcon size={15} /> WhatsApp</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href="#" target="_blank" rel="noreferrer"><FiverrIcon size={15} /> Fiverr</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href="https://github.com/Malikehtesham632" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.linkedin.com/in/ehtesham-ul-haq-173b54288/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.instagram.com/ehtesham_ul_haq007/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.facebook.com/Malikehtesham077" target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a>
          </div>
        </div>
      </section>
    </main>
  );
}
