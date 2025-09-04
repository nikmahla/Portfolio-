import SectionHeading from "../components/SectionHeading";

type Project = {
  title: string;
  subtitle?: string;
  date?: string;
  img: string;
  tags?: string[];
  href?: string;
};
const projects: Project[] = [
  {
    title: "Annahal Shop",
    subtitle: "Next.js Storefront",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&&w=1600&h=900&q=80",
    tags: ["Next.js", "React", "Zustand", "Responsive"],
    href: "https://github.com/nikmahla/annahal-shop",
  },
  {
    title: "Employee Dashboard",
    subtitle: "CRUD • Modals • Pagination",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&h=900&q=80",
    tags: ["REST API", "Tables", "State", "JavaScript"],
    href: "https://github.com/nikmahla/Employee-Dashboard",
  },
  {
    title: "Character Explorer",
    subtitle: "Search • Filters • TS",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&h=900&q=80",
    tags: ["TypeScript", "API", "React", "Tailwind CSS"],
    href: "https://github.com/nikmahla/CharacterExplorer",
  },
  {
    title: "Credit Card",
    subtitle: "Form UX • Live Preview",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&h=900&q=80",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    href: "https://github.com/nikmahla/Credit-Card",
  },
  {
    title: "Company Template",
    subtitle: "Responsive Website",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=900&q=80",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    href: "https://github.com/nikmahla/WebTemplate-Company",
  },
];

export default function Projects() {
  return (
  <section id="projects"
  aria-label="Projects"
  className="relative z-0 scroll-mt-0 px-4 md:pr-24 lg:pr-32 py-16 md:py-24"
>
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading
          title="Projects"
          showDivider
          dividerThickness={3}
          titleClassName="text-4xl sm:text-5xl md:text-6xl"
        />
        <p className="mt-3 text-white/60 max-w-prose">
          Selected work — visual, responsive, and focused on real user
          experience.
        </p>
        <div className="mt-4 space-y-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.6)]"
            >
              <figure className="relative">
                <img
                  src={p.img}
                  alt={`${p.title} — project screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-60 sm:h-76 md:h-90 object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Info panel */}
                <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5">
                  <div
                    className="flex flex-wrap items-end sm:items-center gap-3 rounded-2xl sm:rounded-2xl
                    border border-white/10 bg-black/45 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4
                    shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]"
                  >
                    {/* Left: text */}
                    <div className="min-w-0">
                      {p.subtitle && (
                        <div className="hidden sm:block text-[12px] font-medium text-white/70">
                          {p.subtitle}
                        </div>
                      )}

                      <h3 className="mt-0.5 text-lg sm:text-xl  font-semibold tracking-tight text-white">
                        {p.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {p.date && (
                          <span className="text-[12px] rounded-full bg-white/10 px-2.5 py-0.5 text-white/85">
                            {p.date}
                          </span>
                        )}
                        {p.tags?.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[12px] rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-white/75"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto grid h-10 w-10 place-items-center rounded-xl border
                                   border-white/60 bg-black/30 hover:bg-black/50 transition
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        aria-label={`Open ${p.title}`}
                        title="Open project"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
