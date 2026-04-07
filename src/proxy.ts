// 페이지가 열리기 전에 요청을 먼저 검사하는 파일
// Clerk middleware 도구와 Next.js의 NextResponse를 가져옵니다.
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Clerk 환경 변수가 모두 들어있는지 검사합니다.
const hasClerkKeys = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
);

// 어떤 경로를 보호할지 정의합니다.
const isProtectedRoute = createRouteMatcher(["/problems(.*)", "/notes(.*)"]);

// 보호 라우트인 경우 로그인 검사를 수행합니다.
const clerkHandler = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// Clerk 키가 없을 때는 아무 검사 없이 통과시킵니다.
const passthroughHandler = () => NextResponse.next();

// Next.js가 사용할 기본 proxy 핸들러를 내보냅니다.
export default hasClerkKeys ? clerkHandler : passthroughHandler;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|png|jpg|jpeg|gif|webp|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
