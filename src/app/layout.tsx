import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// styles
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Share Bill - แอพหารบิลสำหรับสายปาร์ตี้",
  description:
    "แอพหารบิลค่าเหล้า ค่าปาร์ตี้ แชร์ค่าทริปกับเพื่อน คำนวณค่าใช้จ่ายอัตโนมัติ แบ่งจ่ายง่าย ไม่มีเกี่ยง",
  keywords: [
    "หารบิล",
    "แชร์บิล",
    "คำนวณค่าเหล้า",
    "หารค่าเหล้า",
    "หารค่าเที่ยว",
    "split bill",
    "แบ่งค่าทริป",
    "หารเงินเพื่อน",
    "ปาร์ตี้",
  ],
  openGraph: {
    title: "Share Bill - แอพหารบิลสำหรับสายปาร์ตี้",
    description:
      "แอพหารบิลค่าเหล้า ค่าปาร์ตี้ แชร์ค่าทริปกับเพื่อน คำนวณค่าใช้จ่ายอัตโนมัติ แบ่งจ่ายง่าย ไม่มีเกี่ยง",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Bill - แอพหารบิลสำหรับสายปาร์ตี้",
    description: "แอพหารบิลค่าเหล้า ค่าปาร์ตี้ แชร์ค่าทริปกับเพื่อน",
  },
};

// components
import UnderDevelopmentPage from "@/components/under-development";
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        {isDevelopment ? (
          <UnderDevelopmentPage />
        ) : (
          <ThemeProvider
            //attribute="class"
            //defaultTheme="light"
            //enableSystem
            //disableTransitionOnChange
          >
            <Header />
            <main className="bg-gray-50 min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </ThemeProvider>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
