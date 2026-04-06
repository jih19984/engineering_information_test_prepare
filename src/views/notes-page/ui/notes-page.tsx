import Link from "next/link";

import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";

export function NotesPage() {
  return (
    <PageShell>
      <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
          Notes Flow Ready
        </p>
        <SectionTitle
          title="오답노트 페이지도 FSD 구조 안에 분리했습니다"
          description="지금은 플레이스홀더지만, 이후에는 인증된 사용자 기준으로 틀린 문제, 메모, 재학습 이동을 이 페이지에 연결합니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <StatusCard
            label="Memo"
            title="문제별 메모 저장"
            description="메모는 문제당 1개를 유지하는 구조로 연결할 예정입니다."
          />
          <StatusCard
            label="Review"
            title="틀린 문제 재학습"
            description="문제 상세 페이지로 다시 이동하는 반복 학습 흐름을 붙입니다."
            tone="accent"
          />
          <StatusCard
            label="Retention"
            title="수동 삭제 전까지 유지"
            description="한 번 틀린 문제는 나중에 맞혀도 자동으로 사라지지 않게 설계합니다."
            tone="highlight"
          />
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
          >
            랜딩으로 돌아가기
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
