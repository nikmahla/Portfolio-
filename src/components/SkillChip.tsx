type SkillChipProps = {
  label: string;
};

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-sm text-zinc-200 ring-1 ring-white/10">
      {label}
    </span>
  );
}
