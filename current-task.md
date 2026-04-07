# current-task.md

## Current Task

- 제목: Clerk proxy 파일 위치 수정
- 상태: Done
- 우선순위: Highest

## 목표

- Clerk middleware가 실제로 실행되도록 proxy 파일 위치를 Next.js 규칙에 맞춘다.
- `src` 디렉터리를 사용하는 현재 프로젝트 구조와 맞게 인증 보호 라우트가 동작하도록 한다.
- 수정 후에도 lint, test, build가 모두 통과하는 상태를 유지한다.

## In Scope

- `proxy.ts`를 `src/proxy.ts`로 이동
- 동작 검증
- 현재 작업 문서 갱신

## Out of Scope

- Supabase 연동
- 인증 UI 변경
- 문제 풀이 기능 구현

## Definition of Done

- [x] Clerk proxy 파일이 `src/proxy.ts`에 존재한다
- [x] 루트의 `proxy.ts`가 제거된다
- [x] `pnpm lint` 통과
- [x] `pnpm test` 통과
- [x] `pnpm build` 통과

## Next Task

- Supabase 스키마 추가
- 데이터 접근 계층 생성
- 이후 문제 목록과 오답노트에 실제 데이터 연결
