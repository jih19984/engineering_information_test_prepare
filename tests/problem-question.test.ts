import { describe, expect, it } from "vitest";

import {
  getProblemPreviewText,
  parseProblemQuestion,
} from "../src/entities/problem/model/question";

describe("problem question helpers", () => {
  it("parses fenced code blocks into text and code segments", () => {
    const segments = parseProblemQuestion(`문제를 읽고 답하시오.

\`\`\`java
System.out.println(1 + 2);
\`\`\`

출력값만 작성하시오.`);

    expect(segments).toEqual([
      { type: "text", content: "문제를 읽고 답하시오." },
      {
        type: "code",
        content: "System.out.println(1 + 2);",
        language: "java",
      },
      { type: "text", content: "출력값만 작성하시오." },
    ]);
  });

  it("builds preview text without markdown fences", () => {
    const preview = getProblemPreviewText(`다음 코드를 보고 답하시오.

\`\`\`python
print("hello")
\`\`\`
`);

    expect(preview).toBe("다음 코드를 보고 답하시오.");
  });
});
