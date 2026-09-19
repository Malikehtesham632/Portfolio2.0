import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Code2, Facebook, Github, Image as ImageIcon, Instagram, Linkedin, Mail, MapPin, Sparkles, Workflow } from "lucide-react";
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
  { value: "6+", label: "Projects delivered" },
  { value: "8+", label: "Tools learned" },
  { value: "<6", label: "Months practicing" },
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

const contactLinks = [
  { label: "Email", value: "ehtesham918605@gmail.com", href: "mailto:ehtesham918605@gmail.com", icon: Mail },
  { label: "WhatsApp", value: "+92 308 7629734", href: "https://wa.me/923087629734", icon: WhatsAppIcon },
  { label: "Fiverr", value: "View gigs", href: "#", icon: FiverrIcon },
  { label: "GitHub", value: "Malikehtesham632", href: "https://github.com/Malikehtesham632", icon: Github },
  { label: "LinkedIn", value: "ehtesham-ul-haq", href: "https://www.linkedin.com/in/ehtesham-ul-haq-173b54288/", icon: Linkedin },
  { label: "Instagram", value: "ehtesham_ul_haq007", href: "https://www.instagram.com/ehtesham_ul_haq007/", icon: Instagram },
  { label: "Facebook", value: "Malikehtesham077", href: "https://www.facebook.com/Malikehtesham077", icon: Facebook },
];

function Index() {
  const aboutRef = useReveal<HTMLDivElement>();
  const experienceRef = useReveal<HTMLDivElement>();
  const skillsRef = useReveal<HTMLDivElement>();
  const workRef = useReveal<HTMLDivElement>();
  const contactRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="nav-glass sticky top-0 z-20 flex items-center justify-between px-5 py-4 md:px-10 lg:px-16">
        <a href="#top" className="font-display text-lg text-foreground" aria-label="Ehtesham Ul Haq, home">EUH<span className="text-primary">.</span></a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="transition-colors hover:text-foreground" href="#experience">Course</a>
          <a className="transition-colors hover:text-foreground" href="#skills">Skills</a>
          <a className="transition-colors hover:text-foreground" href="#work">Work</a>
          <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <a href="mailto:ehtesham918605@gmail.com" className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-primary sm:inline-flex">
          Available <span className="status-dot" />
        </a>
      </header>

      <section id="top" className="relative min-h-[86svh] border-b border-border px-5 pb-10 pt-14 md:px-10 lg:px-16 lg:pb-16">
        <div className="aurora-bg" aria-hidden="true" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <MapPin size={13} /> Faisalabad, Pakistan
            </div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">Backend developer · Photo editor</p>
            <h1 className="max-w-2xl font-display text-[clamp(2.6rem,6.5vw,5.2rem)] leading-[1.02]">
              Ehtesham Ul Haq
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              I build thoughtful digital systems, then give them a visual point of view. Python and FastAPI for the logic, careful color and composition for the finish.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.16em]">
              <a href="mailto:ehtesham918605@gmail.com" className="glass-card rounded-full border-primary/40 px-6 py-3 text-primary">Get in touch</a>
              <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.linkedin.com/in/ehtesham-ul-haq-173b54288/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:text-primary" href="https://wa.me/923087629734" target="_blank" rel="noreferrer"><WhatsAppIcon size={15} /> WhatsApp</a>
            </div>
            <a href="#about" className="group mt-12 inline-flex w-fit items-center gap-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              Scroll <ArrowDown className="transition-transform group-hover:translate-y-1" size={17} />
            </a>
          </div>

          <div ref={statsRef} className="reveal flex flex-col gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel flex items-center justify-between px-6 py-5">
                <span className="font-display text-4xl text-primary">{stat.value}</span>
                <span className="max-w-[8rem] text-right text-xs uppercase leading-tight tracking-[0.12em] text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div ref={aboutRef} className="reveal grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">01 — About me</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">Logic in the code.<br /><span className="text-primary">Warmth in the image.</span></h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
              Currently training deeply in API programming while building independent projects around databases, automation, computer vision, and three-dimensional experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="glass-card p-6">
                  <Icon className="mb-6 text-primary" size={22} strokeWidth={1.4} />
                  <h3 className="font-display text-xl">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-secondary/40 px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div ref={experienceRef} className="reveal">
          <p className="section-label">02 — Course</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">Where I'm training right now.</h2>

          <div className="mt-14 flex max-w-3xl gap-5">
            <div className="flex flex-col items-center pt-2">
              <span className="timeline-dot" />
              <span className="mt-2 w-px flex-1 bg-border" />
            </div>
            <div className="glass-panel flex-1 p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl md:text-3xl">{experience.role}</h3>
                <span className="text-sm text-muted-foreground">{experience.date}</span>
              </div>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-primary">{experience.org} · {experience.location}</p>
              <ul className="mt-6 space-y-3">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div ref={skillsRef} className="reveal">
          <p className="section-label">03 — Skills</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">Tools I reach for.</h2>
        </div>
        <div className="glass-panel marquee-row mt-14 py-8">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, i) => (
              <span key={`${skill}-${i}`} className="font-display shrink-0 text-3xl text-muted-foreground md:text-5xl">
                {skill} <span className="text-primary">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div ref={workRef} className="reveal mb-12">
          <p className="section-label">04 — Selected work</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Systems with purpose.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="relative border-t border-border px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <p className="section-label">05 — Start a conversation</p>
        <a href="mailto:ehtesham918605@gmail.com" className="contact-link mt-6 block max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.02]">
          Let's make <span className="text-primary">something useful.</span>
        </a>
        <p className="mt-6 max-w-md text-muted-foreground">Open to focused freelance projects in backend development and photo editing.</p>

        <div ref={contactRef} className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-card group flex items-center justify-between p-5"
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} className="text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">{link.label}</span>
                    <span className="block text-sm">{link.value}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Ehtesham Ul Haq</span>
          <span>Faisalabad, Pakistan</span>
        </div>
      </footer>
    </main>
  );
}
