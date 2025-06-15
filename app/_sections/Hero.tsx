/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Badge from "@/components/Badge";

export default function Hero() {
  return (
    <section className="px-4 md:px-12 lg:px-20 pt-10 pb-20 md:pb-25 xl:pb-30 bg-radial-[at_50%_50%] md:bg-radial-[at_75%_50%] from-blue-900/50 to-black overflow-hidden">
      <div className="container mx-auto">
        <div className="md:flex gap-10 items-center justify-between">
          <div className="md:flex-1 flex flex-col gap-6 items-center md:items-start">
            <Badge label="Version 2.0 is here" />
            <h1 className="hidden min-[1567px]:flex gap-1 -ml-2 items-center font-semibold text-4xl text-transparent bg-gradient-to-br from-blue-500 to-blue-900 bg-clip-text">
              <Image
                src={"/assets/logo.svg"}
                alt="logo"
                width={140}
                height={140}
                className="size-12"
              />
              Palisto Project
            </h1>
            <h1 className="font-semibold max-w-60 min-[450px]:max-w-full text-balance lg:text-wrap text-4xl md:text-5xl xl:text-6xl text-center md:text-left">
              <span className="text-transparent bg-gradient-to-br from-neutral-50 to-neutral-700 bg-clip-text">
                Pathway to
              </span>{" "}
              <span className="text-blue-500">productivity</span>
            </h1>
            <p className="text-balance md:text-wrap text-md sm:text-lg lg:text-xl text-neutral-200 tracking-tight text-center md:text-left">
              Transform your business insights with powerful analytics tools that track performance
              metrics and drive informed decision-making for your company&apos;s growth.
            </p>
            <div className="mt-5 flex gap-4 items-center">
              <Link
                href={"/"}
                className="xl:text-lg font-semibold tracking-wide bg-neutral-300 text-neutral-900 border-2 border-neutral-300 px-4 py-1 rounded-lg hover:bg-neutral-100 hover:border-neutral-100 active:bg-neutral-200 active:border-neutral-200 duration-200"
              >
                Try it Out
              </Link>
              <span className="text-xs font-semibold rounded-md">OR</span>
              <Link
                href={"/"}
                className="xl:text-lg font-semibold tracking-wide border-2 border-neutral-300 text-neutral-300 px-4 py-1 rounded-lg hover:border-neutral-100 active:border-neutral-200 duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative mt-20 flex-1">
            <motion.img
              src={"/assets/sprites/cog.png"}
              alt="cog"
              width={1500}
              height={1500}
              className="w-full max-w-sm mx-auto md:max-w-full xl:max-w-[640px]"
              animate={{
                y: [-10, 10],
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.img
              src={"/assets/sprites/cylinder.png"}
              alt="cylinder"
              width={432}
              height={432}
              className="hidden md:block absolute top-0 -left-10 min-[875px]:-top-10 min-[875px]:-left-20 size-20 min-[875px]:size-30 lg:size-40 xl:size-50"
              animate={{
                y: [-5, 5],
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.img
              src={"/assets/sprites/noodle.png"}
              alt="noodle"
              width={751}
              height={751}
              className="hidden lg:block absolute -right-20 -bottom-20 size-40 xl:size-50"
              animate={{
                y: [-8, 8],
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
