/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, SquareArrowOutUpRight } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [bannerHidden, setBannerHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0 !== scrolled) {
        setScrolled(scrollY > 0);
      }

      if (scrollY > 10 !== bannerHidden) {
        setBannerHidden(scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, bannerHidden]);

  const headerVariants = {
    scrolled: {
      backgroundColor: "rgba(13, 13, 13, 0.8)",
    },
    top: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  };

  const bannerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderBottomWidth: "0px",
    },
    visible: {
      height: "32px",
      opacity: 1,
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "1px",
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      y: -20,
      opacity: 0,
      pointerEvents: "none",
    },
    open: {
      y: 0,
      opacity: 1,
      pointerEvents: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -5,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.header
      className="z-100 sticky top-0 left-0 right-0 flex flex-col items-center backdrop-blur-md"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 text-center font-semibold py-1 border-b border-neutral-700 w-full"
        initial="visible"
        animate={bannerHidden ? "hidden" : "visible"}
        variants={bannerVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="hidden md:inline text-neutral-300">
          Streamline your workflow and boost your productivity.
        </span>{" "}
        <Link href={"/"} className="flex items-center gap-2">
          Get started for free <SquareArrowOutUpRight size={16} />
        </Link>
      </motion.div>
      <div className="container mx-auto flex items-center justify-between w-full px-4 py-2.5">
        <Link href={"/"} className="flex items-center gap-1 -ml-1.5">
          <Image src={"/assets/logo.svg"} alt="logo" width={140} height={140} className="size-10" />
          <span className="hidden lg:block text-2xl font-semibold">Palisto Project</span>
        </Link>

        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href={"/#showcase"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide"
          >
            Showcase
          </Link>
          <Link
            href={"/#testimonials"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide"
          >
            Customers
          </Link>
          <Link
            href={"/#pricing"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide"
          >
            Help
          </Link>
          <Link
            href={"/"}
            className="bg-neutral-300 text-neutral-900 px-2.5 py-1 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 duration-200 font-semibold tracking-wide"
          >
            Try it Out
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute top-full left-0 right-0 flex flex-col gap-1 w-full px-4 py-3 items-center md:hidden bg-neutral-950/80 backdrop-blur-md border-b border-neutral-700 z-50"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div custom={0} variants={menuItemVariants}>
          <Link
            href={"/#showcase"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide py-2 block"
            onClick={() => setMenuOpen(false)}
          >
            Showcase
          </Link>
        </motion.div>
        <motion.div custom={1} variants={menuItemVariants}>
          <Link
            href={"/#testimonials"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide py-2 block"
            onClick={() => setMenuOpen(false)}
          >
            Customers
          </Link>
        </motion.div>
        <motion.div custom={2} variants={menuItemVariants}>
          <Link
            href={"/#pricing"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide py-2 block"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>
        </motion.div>
        <motion.div custom={3} variants={menuItemVariants}>
          <Link
            href={"/"}
            className="text-neutral-300 hover:text-neutral-200 duration-300 font-semibold tracking-wide py-2 block"
            onClick={() => setMenuOpen(false)}
          >
            Help
          </Link>
        </motion.div>
        <motion.div custom={4} variants={menuItemVariants}>
          <Link
            href={"/"}
            className="bg-neutral-300 text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 duration-200 font-semibold tracking-wide my-2 inline-block"
            onClick={() => setMenuOpen(false)}
          >
            Try it Out
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
