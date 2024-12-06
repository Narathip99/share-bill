import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
