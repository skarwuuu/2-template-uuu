"use client";

/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="px-4 py-20 md:py-25 xl:py-30 bg-linear-180 from-black to-blue-900/30 overflow-hidden"
    >
      <div className="relative container mx-auto">
        <div className="flex flex-col gap-6 items-center bg-neutral-950/10 backdrop-blur-lg p-10 rounded-2xl border-2 max-w-fit mx-auto border-neutral-800/20">
          <h3 className="font-semibold pb-2 -mb-2 text-3xl md:text-4xl xl:text-5xl tracking-tighter md:tracking-tight text-transparent bg-gradient-to-br from-neutral-50 to-neutral-700 bg-clip-text text-center">
            Sign up for free today
          </h3>
          <p className="-mt-2 md:max-w-xl lg:max-w-3xl xl:max-w-4xl text-balance text-md sm:text-lg lg:text-xl text-neutral-200 tracking-tight text-center">
            Transform your business insights with our powerful analytics platform. Get real-time
            data visualization, comprehensive reporting, and actionable insights to drive your
            company&apos;s success.
          </p>
          <Link
            href={"/"}
            className="xl:text-lg font-semibold tracking-wide bg-neutral-300 text-neutral-900 border-2 border-neutral-300 px-4 py-1 rounded-lg hover:bg-neutral-100 hover:border-neutral-100 active:bg-neutral-200 active:border-neutral-200 duration-200"
          >
            Try it Out
          </Link>
        </div>
        <motion.div
          className="hidden sm:block absolute -top-10 -right-22 xl:-right-28"
          style={{ y: y1 }}
        >
          <Image
            src="/assets/sprites/star.png"
            alt="star"
            width={524}
            height={524}
            className="size-30 md:size-40 lg:size-50 xl:size-60"
          />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute -bottom-10 -left-22 xl:-left-28"
          style={{ y: y2 }}
        >
          <Image
            src="/assets/sprites/spring.png"
            alt="spring"
            width={496}
            height={496}
            className="size-30 md:size-40 lg:size-50 xl:size-60 -rotate-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
