import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RightRail from "./RightRail";
import MenuFab from "./MenuFab";
import MobileNavDrawer from "./MobileNavDrawer";
import type { Item } from "../data/nav";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [current, setCurrent] = useState<Item>("home");

  const navigate = (to: Item) => {
    setCurrent(to);
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-dvh bg-black text-white">
      {/* ---------- Mobile: sidebar AT TOP (scrolls with page) ---------- */}
      <div className="md:hidden px-4 pt-16">
        <div className="mx-auto w-full">
          {/* Sidebar has fixed w/h internally (e.g., w-80 min-h-[640px]), here we just place it */}
          <Sidebar />
        </div>
      </div>

      {/* ---------- Desktop: sticky left sidebar + scrolling content ---------- */}
      <div className="mx-auto hidden max-w-7xl px-4 lg:px-6 md:block">
        <div className="flex gap-6 py-6">
          <aside className="md:w-72 lg:w-80">
            <div className="sticky top-6">
              <Sidebar />
            </div>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>

      {/* ---------- Desktop right rail ---------- */}
      <RightRail current={current} onNavigate={navigate} />

      {/* ---------- Mobile menu (top-right) + right drawer ---------- */}
      <MenuFab open={navOpen} onToggle={() => setNavOpen((v) => !v)} />
      <MobileNavDrawer
        open={navOpen}
        current={current}
        onClose={() => setNavOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
