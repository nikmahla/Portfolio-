import SectionHeading from "../components/SectionHeading";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  { title: "Core", items: ["React", "JavaScript", "Next.js", "React Hooks"] },
  { title: "UI", items: ["Tailwind CSS", "Bootstrap", "UI Components"] },
  { title: "State", items: ["Redux Toolkit", "Zustand", "Context API"] },
  { title: "Data", items: ["REST APIs"] },
  { title: "Build & Deploy", items: ["Vercel"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="
        relative z-0
        scroll-mt-24
        px-4 md:pr-24 lg:pr-32
        py-16 md:py-24
      "
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Skills
        </h2>
        <SectionHeading
  title="Skills"

/>
        <p className="mt-2 text-white/60 max-w-prose">
          Technologies I use day-to-day and tools I’m actively improving.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <article
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-base font-semibold text-white">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
