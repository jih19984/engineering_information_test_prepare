// 페이지가 열리기 전에 요청을 먼저 검사하는 파일
// clerk의 미들웨어 도구와 next.js의 nextresponse를 가져옵니다.
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Clerk 환경 변수가 들어있는지 검사
const hasClerkKeys = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
);

// 어떤 경로를 보호할지 정의
const isProtectedRoute = createRouteMatcher(["/problems(.*)", "/notes(.*)"]);

// Clerk middleware 본체
// 요청이 들어왔을 때 그 요청이 보호 라우트면 auth.protect()를 실행.
const clerkHandler = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// 아무 검사도 하지 않고 통과시키는 핸들러.
const passthroughHandler = () => NextResponse.next();

// default란 이 파일이 대표로 내보내는 메인값.
export default hasClerkKeys ? clerkHandler : passthroughHandler;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|png|jpg|jpeg|gif|webp|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
