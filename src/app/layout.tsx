import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import NavigationManager from "@/components/ui/NavigationManager";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "심경(心鏡) - 마음의 거울 | 사찰 가이드",
  description: "사찰이라는 공간이 주는 정적인 평온함과 첨단 기술이 어우러진 지능형 사찰 가이드",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "심경",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#F5F5F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSerifKR.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>
        <NavigationManager>
          {children}
        </NavigationManager>
      </body>
    </html>
  );
}
