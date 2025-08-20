import React from "react";
import { NAV_ITEMS, type Item } from "../data/nav";

type Props = {
  current: Item;
  onNavigate: (to: Item) => void;
  onClose?: () => void; // used by drawer
};

export default function Menu({ current, onNavigate, onClose }: Props) {
  return (
    <ul className="space-y-3">
      {NAV_ITEMS.map(({ id, label, Icon }) => (
        <li key={id}>
          <button
            className={`flex h-12 w-full items-center gap-3 px-4 transition
              ${current === id ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-100"}`}
            onClick={() => {
              onNavigate(id);
              onClose?.();
            }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <Icon className="h-[20px] w-[20px]" />
            </span>
            <span className="text-sm font-semibold">{label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
