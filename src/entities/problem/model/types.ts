// ?는 있어도되고 없어도 된다의 의미의 선택적 속성

// [code, theory] 문자열 두 개를 가진 배열. 문제의 종류를 정의한 데이터
export const problemTypeValues = ["code", "theory"] as const;

// typeof는 이미 만들어진 값이나 변수의 타입을 그대로 훔쳐올 때 사용하는 타입스크립트의 아주 유용한 도구
// 이후 [number]는 배열 안에 들어있는 값들의 타입만 가져오는 것을 의미
export type ProblemType = (typeof problemTypeValues)[number];

// problem은 상세용
export type Problem = {
  id: string;
  question: string;
  answer: string;
  category: string;
  year: number | null;
  problemType: ProblemType;
  language: string | null;
  createdAt: string;
};

// problemsummary는 목록용
export type ProblemSummary = Omit<Problem, "answer">;

// problem 검색 조건용
export type ProblemFilters = {
  category?: string;
  language?: string;
  problemType?: ProblemType;
  year?: number;
};

// problem select 옵션용
export type ProblemFilterOptions = {
  categories: string[];
  languages: string[];
  problemTypes: ProblemType[];
  years: number[];
};
