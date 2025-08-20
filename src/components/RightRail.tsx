import React from "react";
import { NAV_ITEMS, type Item } from "../data/nav";

type Props = { current: Item; onNavigate: (to: Item) => void };

export default function RightRail({ current, onNavigate }: Props) {
  return (
    <nav
      className="
        fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex
        h-[420px] w-12 flex-col items-center justify-between
        rounded-full bg-zinc-900/80 ring-1 ring-white/10
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-28px_48px_rgba(0,0,0,0.55)]
        py-4
      "
      aria-label="Section navigation"
    >
      {NAV_ITEMS.map(({ id, Icon }) => (
        <button
          key={id}
          className="flex h-10 w-10 items-center justify-center"
          onClick={() => onNavigate(id)}
          aria-label={id}
          title={id}
        >
          <div
            className={`
              flex h-9 w-9 items-center justify-center rounded-full
              ${current === id ? "bg-white text-black" : "text-zinc-200"}
            `}
          >
            <Icon className="h-[22px] w-[22px]" />
          </div>
        </button>
      ))}
    </nav>
  );
}
