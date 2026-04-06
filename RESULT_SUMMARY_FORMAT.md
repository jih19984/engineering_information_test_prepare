# RESULT_SUMMARY_FORMAT.md

완료 보고는 아래 형식을 기본으로 사용한다.

## 템플릿

```md
## 요청
- 이번 턴에서 처리한 요청 한 줄 요약

## 변경 사항
- 실제로 바뀐 핵심 내용

## 검증
- `npm run lint`: 통과 / 실패
- `npm run test`: 통과 / 실패
- `npm run build`: 통과 / 실패

## 상태
- Done / In Progress / Blocked

## 다음 포인트
- 이어서 할 작업 또는 남은 리스크
```

## 규칙

- 검증 결과 없이 `Done`이라고 쓰지 않는다.
- `lint`, `test`, `build` 중 하나라도 실패하면 `Done`을 쓰지 않는다.
- 검증을 못 돌렸다면 이유를 적고 `Blocked` 또는 `In Progress`로 둔다.

