import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/app/globals.css";

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
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = false;

  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {isDevelopment ? (
          <UnderDevelopmentPage />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
