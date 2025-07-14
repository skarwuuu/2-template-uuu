/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  calibur,
  doomstar,
  fraude,
  playmore,
  powor,
  world,
} from "@/public/index";

export default function Patnerships() {
  const companiesRowOne = [
    { src: fraude, alt: "fraude" },
    { src: calibur, alt: "calibur" },
    { src: world, alt: "world" },
  ];

  const companiesRowTwo = [
    { src: doomstar, alt: "doomstar" },
    { src: playmore, alt: "playmore" },
    { src: powor, alt: "powor" },
  ];

  return (
    <section className="px-4 lg:px-16 py-10 md:py-15 lg:py-20 overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <h3 className="text-center text-foreground/80 text-lg md:text-xl lg:text-2xl">
          Trusted by companies that you trust.
        </h3>
        <div className="flex flex-col mask-x-from-60% mask-x-to-95% gap-4 mt-8">
          <div className="flex">
            <motion.div
              className="flex flex-none gap-12 items-center pr-12"
              animate={{ x: "-50%" }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {Array.from({ length: 8 })
                .flatMap(() => companiesRowOne)
                .map((company, index) => (
                  <Image
                    key={index}
                    src={company.src}
                    alt={company.alt}
                    className="min-w-60 max-w-60"
                  />
                ))}
            </motion.div>
          </div>
          <div className="flex">
            <motion.div
              className="flex flex-none gap-8 items-center pl-8"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {Array.from({ length: 8 })
                .flatMap(() => companiesRowTwo)
                .map((company, index) => (
                  <Image
                    key={index}
                    src={company.src}
                    alt={company.alt}
                    className="min-w-40 max-w-40"
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
