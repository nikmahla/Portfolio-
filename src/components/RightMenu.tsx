import { MENU } from "../data/menu";
import { useActiveSection } from "../hooks/useActiveSection";

export default function RightMenu() {
  const hrefs = MENU.map((m) => m.href);
  const { active, setActive, scrollTo } = useActiveSection(hrefs);

  return (
    <aside className="hidden md:block fixed right-4 top-1/6 z-50 pointer-events-none">
      <nav className="pointer-events-auto flex w-14 h-100 flex-col items-center justify-center gap-8 rounded-full bg-black/90 shadow-lg">
        {MENU.map(({ href, Icon, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              setActive(href);       // immediate highlight
              scrollTo(href);        // smooth scroll + update URL
            }}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors
              ${active === href ? "bg-white text-black" : "text-gray-300 hover:bg-gray-500"}`}
            aria-label={label}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        ))}
      </nav>
    </aside>
  );
}
