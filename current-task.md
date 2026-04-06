# current-task.md

## Current Task

- 제목: 패키지 매니저를 pnpm으로 전환
- 상태: Done
- 우선순위: Highest

## 목표

- 프로젝트의 표준 패키지 매니저를 pnpm으로 고정한다.
- 문서, 스크립트, 검증 명령을 pnpm 기준으로 통일한다.
- npm lockfile 대신 pnpm lockfile을 사용한다.

## In Scope

- `package.json` 갱신
- 하네스 문서의 명령어 교체
- `pnpm-lock.yaml` 생성
- `package-lock.json` 제거
- 검증 실행

## Out of Scope

- 기능 구현
- DB 연동
- UI 구조 변경

## Definition of Done

- [x] `package.json`에 pnpm 기준이 반영돼 있다
- [x] 문서의 검증 명령이 pnpm으로 통일돼 있다
- [x] `pnpm-lock.yaml`이 존재한다
- [x] `package-lock.json`이 제거된다
- [x] `pnpm lint` 통과
- [x] `pnpm test` 통과
- [x] `pnpm build` 통과

## Next Task

- FSD 기본 폴더 구조 정리
- 라우트 엔트리와 페이지 조합 구조 분리
- 이후 Clerk, Supabase 순차 연동
