import { createServerSupabaseClient } from "@/shared/lib/supabase/server";

import type {
  ProblemFilterOptions,
  ProblemFilters,
  ProblemSummary,
  ProblemType,
} from "../model/types";
import { problemTypeValues } from "../model/types";

type ProblemRow = {
  id: string;
  question: string;
  answer?: string;
  category: string;
  year: number | null;
  problem_type: string;
  language: string | null;
  created_at: string;
};

// value: string 어떤 문자열이든 입력으로 받습니다. 이 함수의 결과물은 ProblemType 중 하나여야 함(code, theory)
// 기본값으로 theory를 반환하도록 함.
function toProblemType(value: string): ProblemType {
  return problemTypeValues.includes(value as ProblemType)
    ? (value as ProblemType)
    : "theory";
}

// 데이터베이스에서 가져온 '가공되지 않은 데이터'를 우리 프로그램에서 사용하기 편한 데이터로 변환해주는 함수
// 문제 요약 정보를 매핑/변환한다.
function mapProblemSummary(row: ProblemRow): ProblemSummary {
  return {
    id: row.id,
    question: row.question,
    category: row.category,
    year: row.year,
    problemType: toProblemType(row.problem_type),
    language: row.language,
    createdAt: row.created_at,
  };
}

// 사용자가 선택한 조건에 맞는 문제 목록을 데이터베이스에서 찾아와서 예쁘게 보여주는 기능을 담당
// filters: ProblemFilters = {}: 검색 조건들을 받습니다. 만약 아무 조건도 안주면 빈 객체 ( {} )를 기본값으로 사용해
// "전체 목록"을 가져옵니다.
export async function listProblems(filters: ProblemFilters = {}) {
  const client = createServerSupabaseClient();
  // let query로 선언한 이유는 밑에서 조건에 따라 쿼리를 계속 추가(수정)할 것이기 때문입니다.
  let query = client
    .from("problems")
    .select("id, question, category, year, problem_type, language, created_at")
    .order("created_at", { ascending: false }); // 최신순으로 정렬해라

  // .eq("A", "B"): A 컬럼의 값이 B와 같은 데이터를 찾아줘.
  if (filters.language) {
    query = query.eq("language", filters.language);
  }

  if (filters.problemType) {
    query = query.eq("problem_type", filters.problemType);
  }

  if (filters.category) {
    query = query.eq("category", filters.category);
  }

  if (typeof filters.year === "number") {
    query = query.eq("year", filters.year);
  }

  // 이제 조립된 쿼리를 실행하고 기다림!
  const { data, error } = await query;

  if (error) {
    throw new Error(`문제 목록을 불러오지 못했습니다: ${error.message}`);
  }

  // (data ?? []): 만약 가져온 데이터가 없으면 빈 리스트를 사용.
  return (data ?? []).map((row) => mapProblemSummary(row as ProblemRow));
}

export async function listProblemFilterOptions(): Promise<ProblemFilterOptions> {
  const client = createServerSupabaseClient();
  const { data, error } = await client
    .from("problems")
    .select("category, language, problem_type, year");

  if (error) {
    throw new Error(`문제 필터를 불러오지 못했습니다: ${error.message}`);
  }

  const categories = new Set<string>();
  const languages = new Set<string>();
  const years = new Set<number>();
  const problemTypes = new Set<ProblemType>();

  for (const item of data ?? []) {
    if (item.category) {
      categories.add(item.category);
    }

    if (item.language) {
      languages.add(item.language);
    }

    if (typeof item.year === "number") {
      years.add(item.year);
    }

    if (item.problem_type) {
      problemTypes.add(toProblemType(item.problem_type));
    }
  }

  return {
    categories: [...categories].sort((left, right) =>
      left.localeCompare(right, "ko"),
    ),
    languages: [...languages].sort((left, right) =>
      left.localeCompare(right, "en"),
    ),
    problemTypes: [...problemTypes].sort((left, right) =>
      left.localeCompare(right, "en"),
    ),
    years: [...years].sort((left, right) => right - left),
  };
}
