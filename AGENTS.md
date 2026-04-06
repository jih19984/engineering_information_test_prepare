# AGENTS.md

이 문서는 에이전트 작업 규칙의 본문이 아니라, 반드시 따라야 할 하네스 문서의 목차다.

## 읽는 순서

1. [Architecture.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\Architecture.md)
2. [current-task.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\current-task.md)
3. [RESULT_SUMMARY_FORMAT.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\RESULT_SUMMARY_FORMAT.md)
4. [COMMIT_MESSAGE_FORMAT.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\COMMIT_MESSAGE_FORMAT.md)
5. [docs/IMPLEMENTATION_CHECKLIST.md](C:\Users\SSAFY\Desktop\engineering_information_test_prepare\docs\IMPLEMENTATION_CHECKLIST.md)

## 핵심 규칙

- 모호성보다 제약을 우선한다.
- 문서에 없는 완료 기준은 인정하지 않는다.
- `current-task.md`의 완료 기준을 만족하지 못하면 작업은 끝난 것이 아니다.
- 완료 보고는 항상 `RESULT_SUMMARY_FORMAT.md` 형식을 따른다.
- 커밋 메시지는 항상 `COMMIT_MESSAGE_FORMAT.md` 형식을 따른다.
- 패키지 매니저는 `pnpm`으로 고정한다.
- 코드나 설정을 변경한 작업은 아래 검증을 모두 통과해야 `Done`이다.
  - `pnpm lint`
  - `pnpm test`
  - `pnpm build`

## 작업 순서

1. `Architecture.md`로 구조와 제약 확인
2. `current-task.md`로 현재 작업과 완료 기준 확인
3. 작업 수행
4. `pnpm lint`, `pnpm test`, `pnpm build` 검증
5. 결과를 정해진 형식으로 요약

## Done 정의

아래를 모두 만족해야 `Done`이다.

- 요구사항 반영 완료
- 문서와 실제 상태 일치
- `pnpm lint` 통과
- `pnpm test` 통과
- `pnpm build` 통과
- 결과 요약 작성 완료
