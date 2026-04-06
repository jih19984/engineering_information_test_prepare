# current-task.md

## Current Task

- 제목: Clerk 인증 구조 추가
- 상태: Done
- 우선순위: Highest

## 목표

- Next.js App Router에 Clerk 인증 구조를 연결한다.
- 로그인/회원가입 라우트를 추가하고, 보호 라우트 정책을 넣는다.
- 환경 변수가 없어도 개발과 빌드가 깨지지 않게 안전 모드를 유지한다.

## In Scope

- `@clerk/nextjs` 의존성 추가
- `ClerkProvider` 연결
- `/sign-in`, `/sign-up` 라우트 추가
- `/problems`, `/notes` 보호 라우트 정책 추가
- `.env.example` 추가
- 검증 실행

## Out of Scope

- Supabase 연동
- 실제 사용자 데이터 저장
- 문제 제출 기능 구현

## Definition of Done

- [x] `ClerkProvider`가 앱 레이아웃에 연결돼 있다
- [x] `/sign-in`, `/sign-up` 라우트가 존재한다
- [x] `/problems`, `/notes` 보호 정책이 존재한다
- [x] `.env.example`에 Clerk 환경 변수가 정리돼 있다
- [x] 환경 변수가 없어도 앱이 빌드 가능하다
- [x] `pnpm lint` 통과
- [x] `pnpm test` 통과
- [x] `pnpm build` 통과

## Next Task

- Supabase 스키마 추가
- 데이터 접근 계층 생성
- 이후 문제 목록과 오답노트에 실제 데이터 연결
