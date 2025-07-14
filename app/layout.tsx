/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import "@/styles/globals.css";
import type { Metadata } from "next";

import LenisScroll from "@/providers/LenisScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel-display",
});

export const metadata: Metadata = {
  title: "Template 2 - Palindroma",
  description: "Template 2 - by skarwuuu",
  icons: "/assets/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnelDisplay.variable}`}>
      <body className="text-foreground bg-background selection:bg-accent/80">
        <LenisScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisScroll>
      </body>
    </html>
  );
}
