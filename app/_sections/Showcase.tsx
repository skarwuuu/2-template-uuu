"use client";

/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section
      id="showcase"
      className="px-4 py-10 md:py-[50] xl:py-15 bg-linear-180 from-black via-blue-900/30 to-black overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto ">
        <div className="space-y-6">
          <h3 className="font-semibold pb-2 text-balance text-3xl md:text-4xl xl:text-5xl tracking-tighter md:tracking-tight text-center">
            <span className="text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300 bg-clip-text">
              The most
            </span>{" "}
            <span className="text-blue-500">effective</span>{" "}
            <span className="text-transparent bg-gradient-to-br from-neutral-300 to-neutral-700 bg-clip-text">
              {" "}
              way to track progress
            </span>
          </h3>
          <p className="-mt-2 text-balance text-md sm:text-lg lg:text-xl text-neutral-200 tracking-tight text-center">
            Unlock powerful insights with comprehensive analytics tools that help you monitor
            company performance, track key metrics, and make data-driven decisions for sustainable
            growth.
          </p>
        </div>
        <div className="mt-10 relative">
          <Image
            src={"/assets/dashboard.png"}
            alt="dashboard"
            width={2408}
            height={1542}
            className="w-full"
          />
          <motion.div
            className="hidden sm:block absolute -top-10 -right-12 xl:-right-18"
            style={{ y: y1 }}
          >
            <Image
              src={"/assets/sprites/pyramid.png"}
              alt="pyramid"
              width={524}
              height={524}
              className="size-30 md:size-40 lg:size-50 xl:size-60"
            />
          </motion.div>
          <motion.div
            className="hidden sm:block absolute -bottom-10 -left-12 xl:-left-18"
            style={{ y: y2 }}
          >
            <Image
              src={"/assets/sprites/tube.png"}
              alt="tube"
              width={496}
              height={496}
              className="size-30 md:size-40 lg:size-50 xl:size-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
