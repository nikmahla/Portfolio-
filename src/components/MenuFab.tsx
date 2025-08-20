type MenuFabProps = { open: boolean; onToggle: () => void };

export default function MenuFab({ open, onToggle }: MenuFabProps) {
  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
      className={`
        fixed z-50 md:hidden
        right-4 top-4
        h-12 w-12 rounded-full
        ${open ? "bg-white text-black" : "bg-zinc-900 text-white"}
        ring-1 ring-white/10
        shadow-[0_10px_24px_rgba(0,0,0,0.35)]
        grid place-items-center transition
      `}
    >
      {open ? (
        // X icon
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z"/>
        </svg>
      ) : (
        // GRID menu icon (your choice)
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M4 4h4v4H4V4Zm6 0h4v4h-4V4Zm6 0h4v4h-4V4ZM4 10h4v4H4v-4Zm6 0h4v4h-4v-4Zm6 0h4v4h-4v-4ZM4 16h4v4H4v-4Zm6 0h4v4h-4v-4Zm6 0h4v4h-4v-4Z"/>
        </svg>
      )}
    </button>
  );
}
