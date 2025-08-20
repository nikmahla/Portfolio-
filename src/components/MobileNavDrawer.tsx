import React from "react";
import Menu from "./Menu";
import type { Item } from "../data/nav";

type Props = {
  open: boolean;
  current: Item;
  onClose: () => void;
  onNavigate: (to: Item) => void;
};

export default function MobileNavDrawer({ open, current, onClose, onNavigate }: Props) {
  return (
    <div className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity
          ${open ? "opacity-100" : "opacity-0"}`}
      />
      {/* panel (RIGHT) */}
      <div
        className={`
          absolute right-0 top-0 h-full w-[300px] max-w-[86%] overflow-y-auto
          bg-zinc-950 p-5 ring-1 ring-white/10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-20px_36px_rgba(0,0,0,0.5)]
          transition-transform ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={onClose}
          className="mb-4 inline-flex h-10 w-[88px] items-center justify-center rounded-xl bg-zinc-900 text-zinc-200 ring-1 ring-white/10"
        >
          Close
        </button>

        <Menu current={current} onNavigate={onNavigate} onClose={onClose} />
      </div>
    </div>
  );
}
