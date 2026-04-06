import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const root = process.cwd();

function read(relativePath: string) {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("harness baseline", () => {
  it("keeps the required harness documents", () => {
    expect(existsSync(join(root, "AGENTS.md"))).toBe(true);
    expect(existsSync(join(root, "Architecture.md"))).toBe(true);
    expect(existsSync(join(root, "current-task.md"))).toBe(true);
    expect(existsSync(join(root, "RESULT_SUMMARY_FORMAT.md"))).toBe(true);
    expect(existsSync(join(root, "COMMIT_MESSAGE_FORMAT.md"))).toBe(true);
  });

  it("defines AGENTS as a table of contents", () => {
    const content = read("AGENTS.md");

    expect(content).toContain("목차");
    expect(content).toContain("Architecture.md");
    expect(content).toContain("current-task.md");
    expect(content).toContain("RESULT_SUMMARY_FORMAT.md");
    expect(content).toContain("COMMIT_MESSAGE_FORMAT.md");
  });

  it("documents done as lint, test, and build passing", () => {
    const content = read("AGENTS.md");

    expect(content).toContain("pnpm lint");
    expect(content).toContain("pnpm test");
    expect(content).toContain("pnpm build");
    expect(content).toContain("Done");
  });

  it("documents the commit message format", () => {
    const content = read("COMMIT_MESSAGE_FORMAT.md");

    expect(content).toContain("<type>(<scope>): <summary>");
    expect(content).toContain("feat(problem):");
    expect(content).toContain("docs(harness):");
    expect(content).toContain("커밋 게이트");
    expect(content).toContain("pnpm lint");
  });
});
