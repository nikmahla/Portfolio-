import { useEffect, useRef, useState } from "react";

export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState(hrefs[0] ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
            break;
          }
        }
      },
      { root: null, rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );

    const sections = hrefs
      .map((h) => document.querySelector(h))
      .filter(Boolean) as Element[];

    sections.forEach((sec) => observerRef.current!.observe(sec));

    return () => {
      sections.forEach((sec) => observerRef.current?.unobserve(sec));
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [hrefs.join("|")]); // stable dependency

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      // Get computed scroll-margin-top (in px)
      const style = window.getComputedStyle(el);
      const scrollMarginTop = parseInt(style.scrollMarginTop) || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    history.replaceState(null, "", href);
  };

  return { active, setActive, scrollTo };
}
