// components/SectionHeading.tsx
export default function SectionHeading({
  title,
  titleClassName = "text-4xl sm:text-5xl md:text-6xl",
  showDivider = true,
  dividerThickness = 3,          // px
  dividerOpacity = "via-white/40" // tweak: via-white/30 .. /60
}: {
  title: string;
  titleClassName?: string;
  showDivider?: boolean;
  dividerThickness?: number;
  dividerOpacity?: string;
}) {
  return (
    <header>
      <h2 className={`font-extrabold tracking-tight text-white ${titleClassName}`}>
        {title}
      </h2>

      {showDivider && (
        <div
          aria-hidden="true"
          className={`mt-4 w-full bg-gradient-to-r from-white/0 ${dividerOpacity} to-white/0`}
          style={{ height: `${dividerThickness}px` }}
        />
      )}
    </header>
  );
}
