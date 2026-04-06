type StatusCardTone = "neutral" | "accent" | "highlight";

type StatusCardProps = {
  label: string;
  title: string;
  description?: string;
  tone?: StatusCardTone;
};

const toneClassMap: Record<StatusCardTone, string> = {
  neutral: "bg-white/75",
  accent: "bg-accent-soft/75",
  highlight: "bg-highlight-soft/75",
};

export function StatusCard({
  label,
  title,
  description,
  tone = "neutral",
}: StatusCardProps) {
  return (
    <article
      className={`rounded-[1.5rem] border border-line px-5 py-5 shadow-sm ${toneClassMap[tone]}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
        {label}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-8 text-foreground">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
      ) : null}
    </article>
  );
}
