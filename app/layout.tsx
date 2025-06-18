/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import "@/styles/globals.css";
import type { Metadata } from "next";

import LenisProvider from "@/providers/LenisProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

import { Toaster } from "sonner";
import { Archivo, Beau_Rivage } from "next/font/google";

export const metadata: Metadata = {
  title: "Palistor",
  description: "E-cigar, Redefined.",
  icons: "/assets/logo.svg",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
});

const beau = Beau_Rivage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-beau",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${archivo.variable} ${beau.variable} cursor-default lg:cursor-none selection:text-stone-900 selection:bg-stone-300`}
      >
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Cursor />
          <Toaster />
        </LenisProvider>
      </body>
    </html>
  );
}
