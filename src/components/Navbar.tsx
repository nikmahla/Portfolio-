import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon, HomeIcon, FolderIcon, SparklesIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const MENU = [
  { label: "Home", href: "#home", Icon: HomeIcon },
  { label: "Projects", href: "#projects", Icon: FolderIcon },
  { label: "Skills", href: "#skills", Icon: SparklesIcon },
  { label: "Contact", href: "#contact", Icon: EnvelopeIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close when clicking outside panel
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brandbg/95 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          {/* Brand */}
          <a href="#home" className="font-semibold tracking-tight">
            Mahla.dev
            <span className="sr-only">Go to home</span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-6 md:flex">
            {MENU.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden">
            {/* optional overlay for nicer UX */}
            <div className="fixed inset-0 top-14 bg-black/30" />

            <div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="absolute right-4 top-16 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-brandbg shadow-xl"
            >
              <ul className="p-2">
                {MENU.map(({ label, href, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* spacer for fixed header */}
      <div aria-hidden className="h-14" />
    </>
  );
}
