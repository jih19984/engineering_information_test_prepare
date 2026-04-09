import { ProblemsPage } from "@/views/problems-page";

function readSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value?.trim() ? value : undefined;
}

function readProblemType(
  value: string | string[] | undefined,
): "code" | "theory" | undefined {
  const problemType = readSearchParam(value);

  return problemType === "code" || problemType === "theory"
    ? problemType
    : undefined;
}

export default async function ProblemsRoute({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | string[];
    language?: string | string[];
    problemType?: string | string[];
    year?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const yearValue = readSearchParam(params.year);
  const year = yearValue ? Number(yearValue) : undefined;

  return (
    <ProblemsPage
      filters={{
        category: readSearchParam(params.category),
        language: readSearchParam(params.language),
        problemType: readProblemType(params.problemType),
        year: Number.isFinite(year) ? year : undefined,
      }}
    />
  );
}
