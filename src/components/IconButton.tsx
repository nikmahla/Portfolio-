import { type ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function IconButton({ children, onClick, ariaLabel }: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="inline-flex flex-col items-center justify-center rounded-xl bg-zinc-900 p-3 ring-1 ring-white/10 active:scale-[0.98]"
    >
      {children}
    </button>
  );
}
