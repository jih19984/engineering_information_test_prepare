import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";

const featureCards = [
  {
    label: "Problems",
    title: "기출·예상 문제를 카테고리별로 학습",
    description:
      "DB, 알고리즘, 네트워크처럼 자주 섞이는 범위를 나눠서 집중적으로 연습합니다.",
    tone: "accent" as const,
  },
  {
    label: "Feedback",
    title: "제출 즉시 정답과 결과를 확인",
    description:
      "단답형 중심 MVP로 시작해 채점 로직과 학습 흐름을 먼저 단단하게 만듭니다.",
    tone: "neutral" as const,
  },
  {
    label: "Notes",
    title: "틀린 문제는 자동으로 오답노트에 축적",
    description:
      "사용자가 직접 지우기 전까지 유지해서, 약점을 잊지 않고 다시 복습할 수 있습니다.",
    tone: "highlight" as const,
  },
];

export function StudyFeatures() {
  return (
    <PageShell>
      <section id="features" className="py-2">
        <SectionTitle
          title="이번 MVP는 학습 효율에 직접 연결되는 흐름부터 구현합니다"
          description="복잡한 통계보다 먼저, 풀고 틀리고 다시 보는 핵심 학습 루프를 안정적으로 만드는 데 집중합니다."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {featureCards.map((card) => (
            <StatusCard key={card.label} {...card} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
