import { useEffect, useState } from "react";
import { MENU } from "../data/menu";
import { useActiveSection } from "../hooks/useActiveSection";
import { Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const hrefs = MENU.map((m) => m.href);
  const { active, setActive, scrollTo } = useActiveSection(hrefs);

  // esc to close + lock scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* toggle (mobile only) */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed top-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full
                   border border-white/20 bg-black/70 text-white backdrop-blur shadow-lg"
      >
        {open ? <XMarkIcon className="h-6 w-6" /> : <Squares2X2Icon className="h-6 w-6" />}
      </button>

      {/* overlay (no blur) */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/55"
          aria-hidden="true"
          onClick={() => setOpen(false)}
          onTouchStart={() => setOpen(false)}
        />
      )}

      {/* drawer (glass) */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed right-0 top-0 z-50 h-full w-72 transform border-l border-white/10
                    bg-black/60 backdrop-blur-md shadow-2xl transition-transform duration-200
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end border-b border-white/10 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-4">
          {MENU.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                setActive(href);   // immediate highlight in drawer
                scrollTo(href);
                setOpen(false);
              }}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors
                ${active === href
                  ? "bg-white text-black font-medium"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"}`}
              aria-label={label}
            >
              {/* optional left accent bar for active */}
              {active === href && (
                <span className="absolute left-0 top-0 h-full w-1 bg-black rounded-r" />
              )}
              <Icon className="h-5 w-5" aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
