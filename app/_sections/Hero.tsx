/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import logo from "@/public/assets/logo.svg";
import cigar from "@/public/assets/cigar.png";

const heroTextDown = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
    y: -20,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  },
};

const heroTextUp = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
    y: 20,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="px-4 py-30 overflow-hidden">
      <div className="container mx-auto flex flex-col justify-between min-h-[80vh]">
        <div className="relative flex justify-center items-center">
          <Image
            src={cigar}
            alt="cigar"
            width={100}
            height={419}
            className="rotate-60 -mt-10 -mb-30 -ml-50 min-[550px]:-mt-20 min-[550px]:-mb-40 min-w-25 min-h-100 min-[550px]:w-35 sm:hidden select-none"
          />
          <Image
            src={cigar}
            alt="cigar"
            width={200}
            height={819}
            className="hidden sm:block lg:hidden rotate-90 -my-80 -ml-100 select-none"
          />
          <Image
            src={cigar}
            alt="cigar"
            width={200}
            height={819}
            className="hidden lg:block rotate-90 -my-80 select-none"
          />
          <motion.span
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05, ease: "linear" }}
            className="absolute top-0 left-0 lg:left-30 xl:left-60 2xl:left-90 font-medium text-5xl"
          >
            {"E-cigars".split("").map((char, i) => (
              <motion.span key={i} variants={heroTextDown} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05, delayChildren: 0.4, ease: "linear" }}
            className="absolute right-0 lg:right-30 xl:right-60 2xl:right-90 bottom-0 font-semibold text-5xl"
          >
            {"Redefined".split("").map((char, i) => (
              <motion.span key={i} variants={heroTextUp} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-balance font-medium min-[550px]:text-right min-[550px]:text-xl sm:text-center w-fit"
          >
            At Palistor, we deliver an unmatched blend of luxury, convenience, and satisfaction,
            established since 1988.
          </motion.p>
        </div>
        <div className="relative flex items-center gap-2 w-fit mx-auto min-[550px]:ml-auto sm:mx-auto">
          <Image src={logo} alt="logo" width={50} height={50} className="size-10" />
          <span className="font-bold text-3xl uppercase">Palistor</span>
        </div>
      </div>
    </section>
  );
}
