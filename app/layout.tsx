/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import "@/styles/globals.css";
import type { Metadata } from "next";

import LenisScroll from "@/providers/LenisScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-space",
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
    <html lang="en" className={`${space.variable}`}>
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
