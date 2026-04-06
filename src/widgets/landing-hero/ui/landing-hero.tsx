import Link from "next/link";

import { authConfig } from "@/shared/config/auth";
import { siteConfig } from "@/shared/config/site";
import { PageShell } from "@/shared/ui/page-shell";

const highlights = [
  "기출과 예상 문제를 반복적으로 푸는 학습 루프",
  "틀린 문제를 자동으로 쌓아두는 오답노트 흐름",
  "Clerk + Supabase 기반의 포트폴리오형 구조",
];

const stats = [
  { label: "학습 루프", value: "문제 풀이 → 피드백 → 오답노트" },
  { label: "MVP 범위", value: "로그인, 문제 목록, 풀이, 오답노트" },
  { label: "구현 원칙", value: "FSD + App Router + pnpm 하네스" },
];

export function LandingHero() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2.25rem] border border-line bg-[linear-gradient(145deg,rgba(255,253,248,0.96),rgba(255,248,236,0.92))] px-6 py-10 shadow-[0_24px_60px_rgba(74,53,29,0.12)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -left-18 top-8 h-52 w-52 rounded-full bg-accent-soft blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-highlight-soft blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-muted backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              {siteConfig.eyebrow}
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                정보처리기사 실기를 위한
                <span className="block text-accent">반복 학습 플랫폼</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {siteConfig.description}
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-foreground sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-white/72 px-4 py-4 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href={authConfig.signInUrl}
                className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
              >
                로그인하고 학습 시작하기
              </Link>
              <Link
                href="#study-roadmap"
                className="rounded-full border border-line bg-white/78 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
              >
                학습 흐름 살펴보기
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className={`rounded-[1.75rem] border border-line px-5 py-5 ${
                  index === 1
                    ? "bg-foreground text-white"
                    : "bg-white/72 text-foreground"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase tracking-[0.24em] ${
                    index === 1 ? "text-white/70" : "text-muted"
                  }`}
                >
                  {stat.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-8">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
