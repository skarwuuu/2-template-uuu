/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

import { Drawer } from "vaul";

import logo from "@/public/assets/logo.svg";
import {
  Feather,
  History,
  LogIn,
  MessageCircleQuestion,
  Palette,
  SquareChevronLeft,
  SquareChevronRight,
  UserPlus,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const scrollYVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollYVelocity, {
    damping: 40,
    stiffness: 140,
    mass: 4,
  });
  const y = useTransform(smoothVelocity, [-1000, 1000], [5, -5]);

  return (
    <motion.header
      style={{ y }}
      transition={{ duration: 0.5 }}
      className="fixed z-100 top-2 left-2 right-2 rounded-xl px-4 py-3 max-w-xl mx-auto bg-stone-800"
    >
      <div className="flex items-center justify-between">
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-2 cursor-none active:scale-95 duration-200"
          >
            <Image src={logo} alt="logo" width={50} height={50} className="size-8" />
            <div className="font-bold text-2xl uppercase select-none">Palistor</div>
          </Link>
        </div>
        <div className="">
          <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="relative flex flex-shrink-0 items-center justify-center gap-2 overflow-hidden px-1 text-lg font-medium transition-all cursor-none active:scale-95 duration-200">
              <SquareChevronLeft /> <span className="hidden md:block">Menu</span>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-199" />
              <Drawer.Content
                className="right-2 top-2 bottom-2 fixed z-200 outline-none w-[300px] flex"
                style={
                  {
                    "--initial-transform": "calc(100% + 8px)",
                  } as React.CSSProperties
                }
              >
                <div hidden>
                  <Drawer.Title />
                </div>
                <div className="bg-stone-900 w-full grow p-5 flex flex-col rounded-[16px]">
                  <div className="mb-3 flex justify-between items-center">
                    <div className="font-medium text-3xl w-fit">Navigation</div>
                    <button
                      className="cursor-none active:scale-95 duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <SquareChevronRight />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col gap-4">
                      <Link
                        href={"/#features"}
                        className="text-center font-semibold border-2 border-stone-500 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <Feather size={18} />
                        Features
                      </Link>
                      <Link
                        href={"/#history"}
                        className="text-center font-semibold border-2 border-stone-500 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <History size={18} />
                        History
                      </Link>
                      <Link
                        href={"/#styles"}
                        className="text-center font-semibold border-2 border-stone-500 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <Palette size={18} />
                        Styles
                      </Link>
                      <Link
                        href={"/#faqs"}
                        className="text-center font-semibold border-2 border-stone-500 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <MessageCircleQuestion size={18} />
                        FAQs
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link
                        href={"/"}
                        className="text-center font-bold border-2 border-stone-400 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <LogIn size={18} />
                        Log In
                      </Link>
                      <Link
                        href={"/"}
                        className="text-center font-bold text-stone-800 bg-stone-400 border-2 border-stone-400 rounded-lg py-2 cursor-none flex justify-center items-center gap-1.5 active:scale-95 duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <UserPlus size={18} />
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </motion.header>
  );
}
