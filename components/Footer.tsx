/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/index";
import { lines } from "@/public";

const footerLinks = [
  { href: "/", label: "Contact" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 py-20 relative overflow-hidden">
      <Image
        src={lines}
        alt="lines"
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 -z-10"
      />
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
          <div className="flex items-center gap-1">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-1 md:gap-3">
            {footerLinks.map((footerLink) => (
              <Link
                key={footerLink.label}
                href={footerLink.href}
                className="shrink-0 px-2 py-1 rounded-lg text-neutral-500 hover:text-neutral-50 hover:underline active:scale-97 duration-150 text-sm md:text-base"
              >
                {footerLink.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-400 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Palindroma. All Rights Reserved.
          </p>
          <p className="text-sm mt-1">
            designed and made by{" "}
            <Link
              href="https://github.com/skarwuuu"
              target="_blank"
              className="hover:text-foreground underline duration-200"
            >
              skarwuuu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
