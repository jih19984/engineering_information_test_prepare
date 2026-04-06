# ITPE Prep

정보처리기사 실기 학습용 웹서비스 프로젝트입니다.

## 개발 환경

- Next.js App Router
- TypeScript
- Tailwind CSS
- pnpm

## 시작하기

의존성 설치:

```bash
pnpm install
```

개발 서버 실행:

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 됩니다.

## 인증 환경 변수

Clerk 인증 구조가 포함되어 있으므로 아래 환경 변수를 `.env.local`에 설정하면 됩니다.

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

환경 변수가 없으면 앱은 빌드 가능 상태를 유지하고, `/sign-in`과 `/sign-up`에서는 설정 안내 화면을 보여줍니다.

## 검증 명령

```bash
pnpm lint
pnpm test
pnpm build
```

## 작업 규칙

하네스 문서를 먼저 읽고 진행합니다.

- [AGENTS.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\AGENTS.md)
- [Architecture.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\Architecture.md)
- [current-task.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\current-task.md)
