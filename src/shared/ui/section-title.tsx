type SectionTitleProps = {
  title: string;
  description: string;
};

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-6 max-w-3xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-8 text-muted">{description}</p>
    </div>
  );
}
