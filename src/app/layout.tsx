import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

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
  title: "Gyeongju Heritage AR Guide | Bulguksa & Seokguram",
  description: "Experience the spiritual beauty of Bulguksa and Seokguram through AR and GPS-based intelligent guidance.",
};

export const viewport = {
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
      <body>
        {children}
      </body>
    </html>
  );
}
