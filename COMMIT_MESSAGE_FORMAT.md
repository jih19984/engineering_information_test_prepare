# COMMIT_MESSAGE_FORMAT.md

## 목적

커밋 메시지는 짧고 검색 가능해야 하며, 다른 에이전트나 엔지니어가 모든 파일을 열어보지 않아도 의도를 이해할 수 있어야 한다.

## 기본 형식

아래 형식을 사용한다.

```text
<type>(<scope>): <summary>
```

예시:

```text
docs(harness): add commit message convention
feat(auth): add Clerk sign-in route
feat(problem): implement answer submission flow
fix(notes): prevent duplicate wrong-answer notes
refactor(problem-list): move filters into feature layer
test(harness): verify required harness documents
chore(config): add verify script
```

## 타입 규칙

- `feat`: 사용자 관점의 기능 추가
- `fix`: 버그 수정
- `refactor`: 동작 변경 없는 내부 구조 정리
- `docs`: 문서만 변경
- `test`: 테스트 추가 또는 수정
- `chore`: 설정, 스크립트, 도구, 유지보수 작업

팀 합의 없이 새로운 타입을 임의로 추가하지 않는다.

## 스코프 규칙

- 스코프는 필수다.
- 짧은 소문자 이름을 사용한다.
- 파일명보다 도메인명 또는 하네스명 기준을 우선한다.

이 프로젝트에서 권장하는 스코프:

- `harness`
- `app`
- `auth`
- `problem`
- `problem-list`
- `notes`
- `shared`
- `config`
- `db`

## 요약 규칙

- 명령형으로 쓴다.
- 가능하면 60자 이내로 유지한다.
- 감상이나 과정이 아니라 변경 내용을 적는다.
- 마침표로 끝내지 않는다.

좋은 예시:

```text
feat(problem): add normalized answer checking
docs(harness): define done criteria
```

좋지 않은 예시:

```text
update stuff
fixed many things
feat: worked on project
docs(harness): updated docs and other files and a lot more
```

## 본문 규칙

변경 이유가 제목만으로 충분히 드러나지 않을 때만 본문을 추가한다.

권장 본문 템플릿:

```text
Why:
- 변경 이유를 적는다

What:
- 핵심 변경 사항을 적는다

Validation:
- pnpm lint
- pnpm test
- pnpm build
```

## 커밋 게이트

작업의 완료 기준을 만족하기 전에는 최종 커밋을 만들지 않는다.

코드 또는 설정 변경의 최소 게이트:

- `pnpm lint`
- `pnpm test`
- `pnpm build`

셋 중 하나라도 실패하면 먼저 수정하거나, 작업 상태를 `Done`으로 표시하지 않는다.
