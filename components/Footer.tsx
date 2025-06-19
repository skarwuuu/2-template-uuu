/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t-2 border-stone-500 text-stone-300 py-12 px-4">
      <div className="max-w-6xl px-5 lg:px-10 mx-auto flex items-center justify-between gap-10">
        <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 w-fit">
              <Image src={logo} alt="logo" width={50} height={50} className="size-10" />
              <p className="font-bold text-3xl uppercase select-none">Palistor</p>
            </div>
            <p className="mt-4 text-stone-400">Handcrafted cigars for the discerning aficionado.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 uppercase">Legal</h3>
            <ul className="flex gap-x-5">
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-100 active:scale-95 duration-200 cursor-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-100 active:scale-95 duration-200 cursor-none"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-stone-700 pt-8 text-center text-stone-500">
        <div className="flex flex-col justify-center items-center">
          <p className="w-fit">&copy; {new Date().getFullYear()} Palistor. All Rights Reserved.</p>
          <p className="text-sm mt-1 w-fit">
            done by{" "}
            <Link
              href="https://github.com/skarwuuu"
              target="_blank"
              className="hover:text-stone-300 underline cursor-none w-fit"
            >
              skarwuuu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
