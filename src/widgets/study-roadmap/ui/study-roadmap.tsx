import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";

const roadmap = [
  {
    step: "01",
    title: "기본 구조 정리",
    description:
      "FSD와 App Router를 나눠서, 라우트 엔트리와 실제 화면 조합이 섞이지 않도록 시작합니다.",
  },
  {
    step: "02",
    title: "인증과 데이터 연동",
    description:
      "Clerk로 로그인 흐름을 만들고, Supabase 스키마와 RLS를 붙여 사용자별 기록을 보호합니다.",
  },
  {
    step: "03",
    title: "문제 풀이와 오답노트 연결",
    description:
      "목록, 상세, 제출, 메모 저장 흐름을 하나로 묶어 실제 학습 가능한 MVP로 완성합니다.",
  },
];

export function StudyRoadmap() {
  return (
    <PageShell>
      <section
        id="study-roadmap"
        className="rounded-[2rem] border border-line bg-white/70 px-6 py-8 sm:px-8"
      >
        <SectionTitle
          title="다음 구현 순서도 학습 루프가 먼저 살아나도록 잡아두었습니다"
          description="지금은 기본 구조를 정리하는 단계이고, 다음부터 실제 인증과 데이터 흐름을 차례로 붙이면 됩니다."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {roadmap.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.5rem] border border-line bg-surface-strong px-5 py-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-highlight">
                Step {item.step}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
