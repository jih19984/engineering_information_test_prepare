import Link from "next/link";

import {
  listProblemFilterOptions,
  listProblems,
  ProblemCard,
  type ProblemFilters,
} from "@/entities/problem";
import { isClerkFullyConfigured } from "@/shared/config/auth";
import { isSupabaseConfigured } from "@/shared/config/supabase";
import { AuthSetupNotice } from "@/shared/ui/auth-setup-notice";
import { PageShell } from "@/shared/ui/page-shell";
import { SectionTitle } from "@/shared/ui/section-title";
import { StatusCard } from "@/shared/ui/status-card";
import { SupabaseSetupNotice } from "@/shared/ui/supabase-setup-notice";

type ProblemsPageProps = {
  filters: ProblemFilters;
};

function pickDeterministicProblemId(
  problemIds: string[],
  filters: ProblemFilters,
): string | null {
  if (problemIds.length === 0) {
    return null;
  }

  const seed = JSON.stringify({
    category: filters.category ?? "",
    language: filters.language ?? "",
    problemType: filters.problemType ?? "",
    year: filters.year ?? "",
    problemIds,
  });

  let hash = 0;

  for (const character of seed) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return problemIds[hash % problemIds.length] ?? null;
}

function getActiveFilterLabels(filters: ProblemFilters) {
  return [
    filters.language ? `언어: ${filters.language}` : null,
    filters.problemType ? `유형: ${filters.problemType}` : null,
    filters.category ? `주제: ${filters.category}` : null,
    typeof filters.year === "number" ? `연도: ${filters.year}` : null,
  ].filter(Boolean);
}

export async function ProblemsPage({ filters }: ProblemsPageProps) {
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

  const [problems, filterOptions] = await Promise.all([
    listProblems(filters),
    listProblemFilterOptions(),
  ]);
  const activeFilterLabels = getActiveFilterLabels(filters);
  const highlightedProblemId = pickDeterministicProblemId(
    problems.map((problem) => problem.id),
    filters,
  );
  const randomProblem =
    problems.find((problem) => problem.id === highlightedProblemId) ?? null;

  return (
    <PageShell>
      <section className="mesh-panel rounded-[2rem] px-6 py-10 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
          Supabase Connected
        </p>
        <SectionTitle
          title="실제 문제 데이터를 기준으로 학습 목록을 확인할 수 있습니다"
          description="언어, 문제 유형, 세부 주제, 출제 연도로 목록을 좁히고 현재 결과 안에서 랜덤 문제로 바로 이동할 수 있습니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <StatusCard
            label="Loaded"
            title={`${problems.length}개 문제`}
            description="현재 필터 기준으로 불러온 문제 수입니다."
            tone="accent"
          />
          <StatusCard
            label="Filters"
            title={activeFilterLabels.length > 0 ? activeFilterLabels.join(" / ") : "전체 보기"}
            description="선택한 조건이 없으면 전체 문제를 보여줍니다."
          />
          <StatusCard
            label="Next"
            title={
              randomProblem
                ? `${randomProblem.language ?? "언어 미지정"} 문제로 랜덤 이동 가능`
                : "현재 조건에 맞는 문제가 없습니다"
            }
            description="랜덤 버튼은 현재 필터 결과 안에서만 선택합니다."
            tone="highlight"
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-line bg-white/75 px-6 py-8 shadow-sm sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionTitle
            title="문제 필터"
            description="체크리스트 기준으로 조회 필터를 먼저 연결했습니다. 답안 제출과 오답노트는 다음 작업에서 이어집니다."
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/problems"
              className="rounded-full border border-line bg-white/80 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
            >
              필터 초기화
            </Link>
            {randomProblem ? (
              <Link
                href={`/problems/${randomProblem.id}`}
                className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
              >
                랜덤 문제 풀기
              </Link>
            ) : null}
          </div>
        </div>

        <form className="mt-8 grid gap-4 lg:grid-cols-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            언어
            <select
              name="language"
              defaultValue={filters.language ?? ""}
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
            >
              <option value="">전체</option>
              {filterOptions.languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            문제 유형
            <select
              name="problemType"
              defaultValue={filters.problemType ?? ""}
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
            >
              <option value="">전체</option>
              {filterOptions.problemTypes.map((problemType) => (
                <option key={problemType} value={problemType}>
                  {problemType}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            세부 주제
            <select
              name="category"
              defaultValue={filters.category ?? ""}
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
            >
              <option value="">전체</option>
              {filterOptions.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            출제 연도
            <select
              name="year"
              defaultValue={typeof filters.year === "number" ? String(filters.year) : ""}
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
            >
              <option value="">전체</option>
              {filterOptions.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <div className="lg:col-span-4 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              필터 적용
            </button>
            <Link
              href="/notes"
              className="rounded-full border border-line bg-white/80 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
            >
              오답노트 보기
            </Link>
          </div>
        </form>
      </section>

      <section className="pb-6">
        {problems.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-line bg-white/70 px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-foreground">
              현재 필터에 맞는 문제가 없습니다
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              필터를 초기화하거나 다른 언어와 주제로 다시 조회해보세요.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
