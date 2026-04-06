# Architecture.md

## 프로젝트 개요

- 프로젝트명: ITPE Prep
- 목적: 정보처리기사 실기 학습용 웹서비스 MVP 구축
- 기본 스택: Next.js App Router, TypeScript, Tailwind CSS, Clerk, Supabase
- 패키지 매니저: pnpm
- 구조 원칙: Next.js 라우팅은 `src/app`에서 관리하고, 애플리케이션 내부 구조는 FSD를 따른다.
- 예외 규칙: Next.js의 예약 폴더인 `src/pages`와 충돌하지 않도록, 이 프로젝트에서는 FSD 페이지 레이어를 `src/views`로 둔다.

## 구조 원칙

- `src/app`은 라우트 엔트리, 레이아웃, 전역 설정만 둔다.
- 화면 조합은 FSD 레이어에서 만들고, App Router 파일은 가능한 한 얇게 유지한다.
- 공통 코드는 재사용 범위에 따라 더 낮은 레이어로 내린다.
- 임시성 폴더를 늘리지 않고, 역할이 불명확한 공용 폴더를 만들지 않는다.

## FSD 레이어

```txt
src/
  app/        # Next.js route entry, layout, providers, globals
  views/      # FSD page layer replacement for Next.js App Router
  widgets/    # large UI blocks
  features/   # user actions
  entities/   # domain models
  shared/     # shared ui, lib, config, api, types
```

## 레이어 import 규칙

- `app` -> `views`, `widgets`, `features`, `entities`, `shared`
- `views` -> `widgets`, `features`, `entities`, `shared`
- `widgets` -> `features`, `entities`, `shared`
- `features` -> `entities`, `shared`
- `entities` -> `shared`
- `shared` -> `shared` 내부만

## 라우트 전략

- `src/app/page.tsx` -> 랜딩 페이지
- `src/app/problems/page.tsx` -> 문제 목록
- `src/app/problems/[id]/page.tsx` -> 문제 풀이
- `src/app/notes/page.tsx` -> 오답노트
- `src/app/sign-in/[[...sign-in]]/page.tsx` -> 로그인
- `src/app/sign-up/[[...sign-up]]/page.tsx` -> 회원가입

## 도메인 방향

- `entities/problem`: 문제 타입, 조회 모델, 문제 API
- `entities/note`: 오답노트 타입, 노트 API
- `entities/user-answer`: 답안 기록 타입, 답안 API
- `features/filter-problems`: 카테고리/연도 필터
- `features/solve-problem`: 답 제출, 채점, 결과 표시
- `features/manage-note`: 메모 저장, 삭제

## 검증 원칙

- 완료 전 `pnpm lint`, `pnpm test`, `pnpm build`를 순서대로 확인한다.
- 검증 결과가 없으면 완료로 간주하지 않는다.
- 완료 기준이 변경되면 `current-task.md`도 함께 갱신한다.
