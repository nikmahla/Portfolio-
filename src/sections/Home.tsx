export default function Home() {
  return (
    <section
      id="home"
      aria-label="About me"
      className="
        scroll-mt-24
        /* one screen tall: 100vh - fixed header (~3.5rem) - main py-10 (5rem) */
        min-h-[calc(100vh-3.5rem-5rem)]
        grid place-items-center
        px-4 md:pr-24 lg:pr-32
        py-10
        relative z-0
      "
    >
      <div className="w-full max-w-[46rem]">
        <h1 className="font-extrabold leading-[0.9] tracking-tight uppercase">
          <span className="sr-only">
            Fatemeh (Mahla) Nikookar — Frontend Developer
          </span>

          <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-white">
            Frontend
          </span>
          <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-white/20">
            Developer
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/75 max-w-prose">
          Frontend developer crafting fast, accessible, responsive web
          interfaces with
          <span className="text-white"> React</span> and
          <span className="text-white"> TypeScript</span>. I care about clean
          architecture, consistent UI, and UX that feels natural across devices.
        </p>

        <p className="mt-4 text-base md:text-lg text-white/70 max-w-prose">
          I build component-driven interfaces, keep state predictable, integrate
          REST APIs, and refine the details—micro-interactions, keyboard flows,
          and semantic HTML—so everything works without friction.
        </p>

        <p className="mt-4 text-base md:text-lg text-white/70 max-w-prose">
          Growth-minded and practical: focused on performance, accessibility,
          and maintainable patterns; always learning modern React approaches and
          better testing to ship reliable, business-ready features.
        </p>
      </div>
    </section>
  );
}
