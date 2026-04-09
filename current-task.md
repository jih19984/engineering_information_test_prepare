# current-task.md

## Current Task

- 제목: Supabase 문제 조회 계층 및 문제 화면 연결
- 상태: Done
- 우선순위: Highest

## 목표

- Supabase 연결 유틸과 문제 조회 계층을 추가해 앱에서 실제 문제 데이터를 읽을 수 있게 한다.
- `problems` 스키마와 seed를 저장소에 문서화해 빈 프로젝트에서도 재현 가능한 상태를 만든다.
- 문제 목록과 문제 상세 페이지를 Supabase 실데이터 기반 화면으로 교체한다.
- 수정 후에도 lint, test, build가 모두 통과하는 상태를 유지한다.

## In Scope

- Supabase 환경 변수 예시 추가
- `supabase/schema.sql`, `supabase/seed.sql` 추가
- Supabase 서버 클라이언트 추가
- `entities/problem` 조회 계층 추가
- `/problems`, `/problems/[id]` 실데이터 연결
- 현재 작업 문서 갱신

## Out of Scope

- 답안 제출 기능 구현
- 오답노트 CRUD 구현
- 통계 기능 구현

## Definition of Done

- [x] `.env.example`에 Supabase 환경 변수 예시가 추가된다
- [x] `supabase/schema.sql`과 `supabase/seed.sql`이 현재 DB 구조와 맞는다
- [x] `src/shared/lib/supabase/server.ts`가 추가된다
- [x] `entities/problem`에 `listProblems()`와 `getProblem()`이 추가된다
- [x] `/problems`가 실데이터 목록을 렌더링한다
- [x] `/problems/[id]`가 실데이터 상세를 렌더링한다
- [x] `pnpm lint` 통과
- [x] `pnpm test` 통과
- [x] `pnpm build` 통과

## Next Task

- 답안 제출 서버 액션 추가
- 오답노트 자동 생성 로직 추가
- 오답노트 페이지 실데이터 연결
