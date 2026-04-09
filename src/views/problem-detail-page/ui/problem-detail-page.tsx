import Link from "next/link";

import { getProblem, ProblemContent } from "@/entities/problem";
import { isClerkFullyConfigured } from "@/shared/config/auth";
import { isSupabaseConfigured } from "@/shared/config/supabase";
import { AuthSetupNotice } from "@/shared/ui/auth-setup-notice";
import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";
import { SupabaseSetupNotice } from "@/shared/ui/supabase-setup-notice";

type ProblemDetailPageProps = {
  problemId: string;
};

function buildMeta(problem: Awaited<ReturnType<typeof getProblem>>) {
  if (!problem) {
    return "문제를 찾을 수 없음";
  }

  return [problem.language, problem.problemType, problem.category, problem.year]
    .filter(Boolean)
    .join(" · ");
}

export async function ProblemDetailPage({ problemId }: ProblemDetailPageProps) {
  if (!isClerkFullyConfigured) {
    return (
      <PageShell>
        <AuthSetupNotice />
      </PageShell>
    );
  }

  if (!isSupabaseConfigured) {
    return (
      <PageShell>
        <SupabaseSetupNotice />
      </PageShell>
    );
  }

  const problem = await getProblem(problemId);

  if (!problem) {
    return (
      <PageShell>
        <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
          <SectionTitle
            title="요청한 문제를 찾지 못했습니다"
            description="문제가 삭제되었거나 잘못된 ID로 접근한 상태입니다. 목록으로 돌아가 다른 문제를 열어보세요."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/problems"
              className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
            >
              문제 목록으로 돌아가기
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-highlight">
          Problem Detail
        </p>
        <SectionTitle
          title="실제 문제 데이터를 기준으로 상세 화면을 렌더링합니다"
          description="문제 본문은 코드 블록을 따로 분리해서 읽기 쉽게 보여주고, 답안 제출 전에도 정답을 확인할 수 있도록 펼침 영역으로 분리했습니다."
        />
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <StatusCard
            label="Problem"
            title={buildMeta(problem)}
            description={`문제 ID: ${problem.id}`}
            tone="highlight"
          />
          <StatusCard
            label="Next Step"
            title="답 입력, 제출 결과, 오답노트 연결은 다음 작업입니다"
            description="이번 단계에서는 데이터 조회와 필터 기반 탐색 경험을 먼저 안정화했습니다."
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-line bg-white/80 px-6 py-8 shadow-sm sm:px-8">
        <SectionTitle
          title="문제 본문"
          description="현재 DB에 저장된 question 문자열을 기준으로 렌더링합니다."
        />
        <div className="mt-8">
          <ProblemContent question={problem.question} />
        </div>

        <details className="mt-8 rounded-[1.5rem] border border-line bg-surface-strong px-5 py-5">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            정답 미리 보기
          </summary>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-muted">
            {problem.answer}
          </p>
        </details>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/problems"
            className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
          >
            문제 목록으로 돌아가기
          </Link>
          <Link
            href="/notes"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            오답노트 확인하기
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
