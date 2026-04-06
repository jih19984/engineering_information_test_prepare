import Link from "next/link";

import { authConfig } from "@/shared/config/auth";

export function AuthSetupNotice() {
  return (
    <section className="mesh-panel rounded-[2rem] px-6 py-8 sm:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-highlight">
        Clerk Setup Needed
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground">
        Clerk 환경 변수를 먼저 넣어야 인증 화면이 동작합니다
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        현재 프로젝트에는 인증 구조가 준비되어 있지만, Clerk 키가 아직 없어서
        로그인 컴포넌트를 렌더링하지 않는 안전 모드로 동작 중입니다.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-line bg-surface-strong px-5 py-5 text-sm text-foreground">
        <p className="font-medium">필요한 환경 변수</p>
        <ul className="mt-3 space-y-2 text-muted">
          <li>`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`</li>
          <li>`CLERK_SECRET_KEY`</li>
          <li>`NEXT_PUBLIC_CLERK_SIGN_IN_URL={authConfig.signInUrl}`</li>
          <li>`NEXT_PUBLIC_CLERK_SIGN_UP_URL={authConfig.signUpUrl}`</li>
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full border border-line bg-white/75 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white"
        >
          홈으로 돌아가기
        </Link>
        <Link
          href="https://clerk.com/docs/nextjs/getting-started/quickstart"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
        >
          Clerk Quickstart 보기
        </Link>
      </div>
    </section>
  );
}
