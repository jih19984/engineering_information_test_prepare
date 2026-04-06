import Link from "next/link";

import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";

const steps = [
  "카테고리와 연도 필터를 추가해 문제를 빠르게 좁힙니다.",
  "랜덤 문제 이동과 문제 상세 라우트를 연결합니다.",
  "Clerk 인증 후 실제 문제 데이터를 Supabase에서 읽어옵니다.",
];

export function ProblemsPage() {
  return (
    <PageShell>
      <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
          Route Entry Ready
        </p>
        <SectionTitle
          title="문제 목록 라우트 골격을 먼저 준비했습니다"
          description="이 페이지는 이후 실제 문제 목록 UI가 들어갈 자리입니다. 지금은 FSD 구조와 App Router 엔트리를 분리해두는 단계입니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <StatusCard
              key={step}
              label={`Step ${index + 1}`}
              title={step}
              tone={index === 0 ? "accent" : "neutral"}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/problems/sample"
            className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
          >
            상세 라우트 확인하기
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
