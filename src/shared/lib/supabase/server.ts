// clerk 인증 서비스와 supabase를 하나로 묶어주는 연결 고리를 만드는 함수
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

import { supabaseConfig } from "@/shared/config/supabase";

export function createServerSupabaseClient() {
  if (!supabaseConfig.url || !supabaseConfig.publishableKey) {
    throw new Error("Supabase 환경 변수가 설정되지 않았습니다.");
  }

  return createClient(supabaseConfig.url, supabaseConfig.publishableKey, {
    // supabase가 데이터베이스에 접근할 때마다 실행할 함수
    async accessToken() {
      // auth를 통해 사용자의 세션의 확인하고, 그 사람의 신분증을 getToken으로 가져옴.
      return (await auth()).getToken();
    },
  });
}
