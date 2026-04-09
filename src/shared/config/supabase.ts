// ??란 왼쪽 값이 없으면 오른쪽 값을 써라
// as const는 이 객체는 절대 변하지 않는 상수 그 자체라고 선언하는 것 (읽기 전용)
export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "",
} as const;

export const isSupabaseConfigured = Boolean(
  supabaseConfig.url && supabaseConfig.publishableKey,
);
