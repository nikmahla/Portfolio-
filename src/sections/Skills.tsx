import SectionHeading from "../components/SectionHeading";

const CORE = ["React", "TypeScript", "JavaScript", "Next.js", "React Hooks"];
const STATE_DATA = ["Redux Toolkit", "Zustand", "Context API", "REST APIs", "Vercel"];
const UI = ["Tailwind CSS", "Bootstrap", "Responsive Design", "UI Components"];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      {children}
    </span>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
  <section
  id="skills"
  aria-label="Skills"
  className="relative z-0 scroll-mt-1 px-4 md:pr-24 lg:pr-32 py-16 md:py-24"
>
      {/* Left-aligned container (no mx-auto) */}
      <div className="w-full max-w-[62rem]">
        <SectionHeading
          title="Skills"
          showDivider
          dividerThickness={2}
          titleClassName="text-4xl sm:text-5xl md:text-6xl"
        />
        <p className="mt-3 text-white/70 max-w-prose">
          Technologies I use day-to-day and tools I’m actively improving.
        </p>

   
        <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
            <div className="p-5 sm:p-6 space-y-5">
              <Block title="Core" items={CORE} />
              <div className="h-px bg-white/10" aria-hidden />
              <Block title="State & Data" items={STATE_DATA} />
            </div>
          </article>

          {/* RIGHT: UI */}
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
            <div className="p-5 sm:p-6">
              <Block title="UI" items={UI} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
