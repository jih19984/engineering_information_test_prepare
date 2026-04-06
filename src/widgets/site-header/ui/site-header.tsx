import Link from "next/link";

import { Show, UserButton } from "@clerk/nextjs";

import { authConfig } from "@/shared/config/auth";
import { PageShell } from "@/shared/ui/page-shell";

type SiteHeaderProps = {
  authEnabled: boolean;
};

function AuthActions() {
  return (
    <>
      <Show when="signed-out">
        <div className="flex items-center gap-2">
          <Link
            href={authConfig.signInUrl}
            className="rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white"
          >
            로그인
          </Link>
          <Link
            href={authConfig.signUpUrl}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            회원가입
          </Link>
        </div>
      </Show>
      <Show when="signed-in">
        <div className="flex items-center gap-3">
          <Link
            href={authConfig.afterAuthUrl}
            prefetch={false}
            className="rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white"
          >
            학습 시작
          </Link>
          <UserButton />
        </div>
      </Show>
    </>
  );
}

export function SiteHeader({ authEnabled }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-background/85 backdrop-blur">
      <PageShell>
        <div className="flex items-center justify-between gap-4 rounded-full border border-line bg-white/55 px-4 py-3 shadow-sm">
          <div>
            <Link href="/" className="font-display text-xl font-semibold text-foreground">
              ITPE Prep
            </Link>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Repetition-first practical exam training
            </p>
          </div>
          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href="/problems"
              prefetch={false}
              className="text-sm font-medium text-foreground transition hover:text-accent"
            >
              문제 목록
            </Link>
            <Link
              href="/notes"
              prefetch={false}
              className="text-sm font-medium text-foreground transition hover:text-accent"
            >
              오답노트
            </Link>
          </nav>
          {authEnabled ? (
            <AuthActions />
          ) : (
            <div className="rounded-full border border-dashed border-line bg-white/70 px-4 py-2 text-sm text-muted">
              Clerk 키를 넣으면 로그인 UI가 활성화됩니다
            </div>
          )}
        </div>
      </PageShell>
    </header>
  );
}
