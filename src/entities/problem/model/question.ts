export type ProblemQuestionSegment =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "code";
      content: string;
      language: string | null;
    };

// 마크다운의 코드 블록(''')을 찾는 정규식. 언어 이름과 그 안의 코드 내용을 캡처합니다.
const codeFencePattern = /```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g;

// 줄바꿈이나 연속 공백을 한 칸의 공백으로 합치고 압뒤 공백을 깎아줌. (미리보기용)
function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

// 텍스트를 조각조각 나누는 핵심 로직입니다. (text와 code 조각으로 나눔)
export function parseProblemQuestion(
  question: string,
): ProblemQuestionSegment[] {
  const segments: ProblemQuestionSegment[] = [];
  let lastIndex = 0;

  for (const match of question.matchAll(codeFencePattern)) {
    const matchStart = match.index ?? 0;

    if (matchStart > lastIndex) {
      const textContent = question.slice(lastIndex, matchStart).trim();

      if (textContent) {
        segments.push({ type: "text", content: textContent });
      }
    }

    const [, language = "", codeContent = ""] = match;
    segments.push({
      type: "code",
      content: codeContent.trimEnd(),
      language: language || null,
    });

    lastIndex = matchStart + match[0].length;
  }

  if (lastIndex < question.length) {
    const trailingText = question.slice(lastIndex).trim();

    if (trailingText) {
      segments.push({ type: "text", content: trailingText });
    }
  }

  if (segments.length === 0) {
    return [{ type: "text", content: question.trim() }];
  }

  return segments;
}

// 목록 화면 등에 보여줄 짧은 요약글을 만듭니다.
export function getProblemPreviewText(question: string) {
  const segments = parseProblemQuestion(question);
  const textSegments = segments
    .filter(
      (segment): segment is Extract<ProblemQuestionSegment, { type: "text" }> =>
        segment.type === "text",
    )
    .map((segment) => segment.content);

  if (textSegments.length > 0) {
    return normalizeWhitespace(textSegments.join(" "));
  }

  const firstCodeSegment = segments.find(
    (segment): segment is Extract<ProblemQuestionSegment, { type: "code" }> =>
      segment.type === "code",
  );

  if (!firstCodeSegment) {
    return "";
  }

  return normalizeWhitespace(firstCodeSegment.content.split("\n")[0] ?? "");
}
