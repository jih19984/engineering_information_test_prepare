import { createServerSupabaseClient } from "@/shared/lib/supabase/server";

import type { Problem, ProblemType } from "../model/types";
import { problemTypeValues } from "../model/types";

type ProblemRow = {
  id: string;
  question: string;
  answer: string;
  category: string;
  year: number | null;
  problem_type: string;
  language: string | null;
  created_at: string;
};

function toProblemType(value: string): ProblemType {
  return problemTypeValues.includes(value as ProblemType)
    ? (value as ProblemType)
    : "theory";
}

function mapProblem(row: ProblemRow): Problem {
  return {
    id: row.id,
    question: row.question,
    answer: row.answer,
    category: row.category,
    year: row.year,
    problemType: toProblemType(row.problem_type),
    language: row.language,
    createdAt: row.created_at,
  };
}

// 문제 ID 하나를 읽는 함수
// maybeSingle() 함수는 없으면 null 있으면 한 건
// 보통 select()만 하면 결과는 항상 배열 형태. 데이터가 하나만 있어도 [데이터] 이렇게나옴.
// 하지만 maybeSingle()을 붙이면 결과가 객체 {} 혹은 null로 바뀝니다.
// supabase 라이브러리가 제공하는 전용 함수
export async function getProblem(problemId: string) {
  const client = createServerSupabaseClient();
  const { data, error } = await client
    .from("problems")
    .select(
      "id, question, answer, category, year, problem_type, language, created_at",
    )
    .eq("id", problemId)
    .maybeSingle();

  if (error) {
    throw new Error(`문제 상세를 불러오지 못했습니다: ${error.message}`);
  }

  return data ? mapProblem(data as ProblemRow) : null;
}
