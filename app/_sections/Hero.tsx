/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";

import { lines } from "@/public/index";
import { BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-25 md:py-30 flex items-center justify-center min-h-screen bg-[url('/assets/bg/mesh.png')] object-center bg-cover mask-b-from-80%">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-4 items-start md:items-center">
          <div className="flex flex-col gap-8 items-start md:flex-1">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-balance">
                Navigating the digital landscape for success
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-foreground/80">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 border-2 border-foreground/20 bg-accent/20 active:scale-97 duration-150 md:text-lg lg:text-xl rounded-2xl">
              <BookOpen size={18} />
              Book a Consultation
            </button>
          </div>
          <div className="md:flex-1 flex justify-end">
            <Image
              src={lines}
              alt="lines"
              priority
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
