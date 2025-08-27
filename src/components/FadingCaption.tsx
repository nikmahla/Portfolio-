// FadingCaption.tsx
import { useEffect, useState } from "react";

export default function FadingCaption({ children }: { children: React.ReactNode }) {
  const [dim, setDim] = useState(false);

  useEffect(() => {
    const onScroll = () => setDim(window.scrollY > 40); // >40px from top → gray
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <p className={`mt-2 text-sm transition-colors duration-500 ${dim ? "text-white/60" : "text-white"}`}>
      {children}
    </p>
  );
}
