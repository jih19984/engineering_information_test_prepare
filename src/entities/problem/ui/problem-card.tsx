import Link from "next/link";

import type { ProblemSummary } from "../model/types";
import { getProblemPreviewText } from "../model/question";

type ProblemCardProps = {
  problem: ProblemSummary;
};

function buildMeta(problem: ProblemSummary) {
  return [problem.language, problem.problemType, problem.category, problem.year]
    .filter(Boolean)
    .join(" · ");
}

export function ProblemCard({ problem }: ProblemCardProps) {
  const preview = getProblemPreviewText(problem.question);
  const meta = buildMeta(problem);

  return (
    <article className="rounded-[1.75rem] border border-line bg-white/80 px-6 py-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
        {meta || "문제"}
      </p>
      <h3 className="mt-3 text-xl font-semibold leading-9 text-foreground">
        {preview || "문제 본문 보기"}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
        {preview || "문제 본문이 비어 있습니다."}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/problems/${problem.id}`}
          className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
        >
          문제 열기
        </Link>
      </div>
    </article>
  );
}
