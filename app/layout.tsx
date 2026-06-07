import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Love Story | A Netflix Original Series",
  description:
    "Two souls destined to find each other. This is the cinematic story of our love — every chapter, every memory, every heartbeat.",
  keywords: ["love story", "relationship", "memories", "couple", "netflix"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#141414] font-[family-name:var(--font-inter)] text-white">
        {children}
      </body>
    </html>
  );
}
