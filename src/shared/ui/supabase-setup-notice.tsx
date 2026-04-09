// Next.js 프로젝트에서 페이지 사이를 이동할 때 사용하는 전용 컴포넌트를 가져오는 코드.
// Next.js 에서는 새로고침 발생이 없어 빠르며, <Link>를 사용시 바뀌는 부분만 로딩됩니다.

// supabase 키가 없을 때 안내 UI를 띄우는 안전 장치
import Link from "next/link";

export function SupabaseSetupNotice() {
  return (
    <section className="mesh-panel rounded-[2rem] px-6 py-8 sm:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-highlight">
        Supabase Setup Needed
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground">
        Supabase 환경 변수를 먼저 넣어야 문제 데이터를 읽을 수 있습니다
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        현재 프로젝트에는 문제 조회 구조가 준비되어 있지만, Supabase URL과 공개
        키가 없어서 데이터 요청을 보내지 않는 안전 모드로 동작 중입니다.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-line bg-surface-strong px-5 py-5 text-sm text-foreground">
        <p className="font-medium">필요한 환경 변수</p>
        <ul className="mt-3 space-y-2 text-muted">
          <li>`NEXT_PUBLIC_SUPABASE_URL`</li>
          <li>`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`</li>
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
          href="https://supabase.com/docs/guides/auth/third-party/clerk"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-strong"
        >
          Supabase + Clerk 문서 보기
        </Link>
      </div>
    </section>
  );
}
