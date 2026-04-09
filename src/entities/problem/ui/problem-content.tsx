import { parseProblemQuestion } from "../model/question";

type ProblemContentProps = {
  question: string;
};

export function ProblemContent({ question }: ProblemContentProps) {
  const segments = parseProblemQuestion(question);

  return (
    <div className="space-y-4">
      {segments.map((segment, index) => {
        if (segment.type === "code") {
          return (
            <section
              key={`${segment.type}-${index}`}
              className="overflow-hidden rounded-[1.5rem] border border-line bg-slate-950 text-slate-50"
            >
              <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                {segment.language ?? "code"}
              </div>
              <pre className="overflow-x-auto px-4 py-4 text-sm leading-7">
                <code>{segment.content}</code>
              </pre>
            </section>
          );
        }

        return (
          <p
            key={`${segment.type}-${index}`}
            className="whitespace-pre-wrap text-base leading-8 text-foreground"
          >
            {segment.content}
          </p>
        );
      })}
    </div>
  );
}
