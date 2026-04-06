import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Noto_Sans_KR, Space_Grotesk } from "next/font/google";

import { isClerkPublishableKeySet } from "@/shared/config/auth";
import { SiteHeader } from "@/widgets/site-header/ui/site-header";

import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Noto_Sans_KR({
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ITPE Prep",
  description: "정보처리기사 실기 학습을 위한 반복 학습형 웹서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const app = (
    <html
      lang="ko"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader authEnabled={isClerkPublishableKeySet} />
        {children}
      </body>
    </html>
  );

  if (!isClerkPublishableKeySet) {
    return app;
  }

  return <ClerkProvider afterSignOutUrl="/">{app}</ClerkProvider>;
}
