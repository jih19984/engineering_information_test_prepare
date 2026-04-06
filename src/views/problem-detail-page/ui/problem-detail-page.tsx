import Link from "next/link";

import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";

type ProblemDetailPageProps = {
  problemId: string;
};

export function ProblemDetailPage({ problemId }: ProblemDetailPageProps) {
  return (
    <PageShell>
      <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-highlight">
          Dynamic Route Prepared
        </p>
        <SectionTitle
          title="문제 상세 페이지 자리도 미리 연결해두었습니다"
          description="Next.js 16 기준 동적 params는 Promise로 전달되므로, 현재 라우트 엔트리에서 이를 await 해서 페이지 조합으로 넘깁니다."
        />
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <StatusCard
            label="Problem ID"
            title={problemId}
            description="나중에는 이 값을 기준으로 Supabase에서 문제와 사용자 풀이 기록을 조회합니다."
            tone="highlight"
          />
          <StatusCard
            label="Next Step"
            title="문제 본문, 답 입력, 제출 결과 UI를 추가합니다"
            description="현재는 라우트 연결과 페이지 배치만 먼저 끝낸 상태입니다."
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/problems"
            className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
          >
            문제 목록 자리 보기
          </Link>
          <Link
            href="/notes"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            오답노트 자리 보기
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
