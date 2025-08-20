import { type ReactNode } from "react";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function MobileDrawer({ open, onClose, children }: MobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <div
        className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-zinc-950 p-4 ring-1 ring-white/10 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="mb-3 inline-flex rounded-lg bg-zinc-800 px-3 py-1 text-sm ring-1 ring-white/10"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
