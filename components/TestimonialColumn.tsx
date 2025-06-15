/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { type TestimonialsType } from "@/app/_sections/Testimonials";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export function TestimonialColumn(props: {
  testimonials: TestimonialsType;
  className?: string;
  reverse?: boolean;
}) {
  const { testimonials, className, reverse } = props;

  return (
    <motion.div
      initial={{ y: reverse ? "-100%" : "0%" }}
      animate={{ y: reverse ? "0%" : "-100%" }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      className={twMerge("flex flex-col flex-1 gap-6", reverse ? "pb-6" : "pt-6", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {testimonials.map(({ text, imageSrc, name, username }, idx) => (
            <div
              key={`${name}-${i}-${idx}`}
              className="bg-neutral-950 py-4 px-6 border-2 border-neutral-800 rounded-2xl"
            >
              <p>{text}</p>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={84} height={84} className="size-10" />
                <div className="-space-y-1">
                  <h3 className="font-semibold text-md">{name}</h3>
                  <h4 className="text-neutral-400">{username}</h4>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
