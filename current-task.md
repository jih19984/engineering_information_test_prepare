# current-task.md

## Current Task

- 제목: FSD 기본 구조와 랜딩 페이지 정리
- 상태: Done
- 우선순위: Highest

## 목표

- `src/app`은 라우트 엔트리 중심으로 얇게 유지한다.
- 실제 화면 조합은 FSD 구조 안의 `views`와 `widgets`로 분리한다.
- 기본 Next 템플릿 화면을 ITPE Prep용 랜딩 페이지로 교체한다.

## In Scope

- FSD 기본 디렉터리 생성
- 홈 페이지 조합 분리
- `/problems`, `/problems/[id]`, `/notes` 라우트 골격 추가
- 랜딩 페이지 디자인 교체
- 검증 실행

## Out of Scope

- Clerk 인증 연동
- Supabase 연동
- 실제 문제 데이터 렌더링
- 문제 제출 기능

## Definition of Done

- [x] `src/views`, `src/widgets`, `src/shared`, `src/features`, `src/entities` 구조가 보인다
- [x] `src/app/page.tsx`가 직접 화면을 만들지 않고 페이지 조합을 import 한다
- [x] `/problems`, `/problems/[id]`, `/notes` 라우트 엔트리가 추가된다
- [x] 기본 Next 템플릿 문구가 제거된다
- [x] `pnpm lint` 통과
- [x] `pnpm test` 통과
- [x] `pnpm build` 통과

## Next Task

- Clerk 인증 구조 추가
- 보호 라우트와 로그인 페이지 연결
- 이후 Supabase 스키마와 데이터 접근 계층 연동
