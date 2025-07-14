/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useLenis } from "lenis/react";
import { AnimatePresence } from "motion/react";

import { LogIn, Menu, MessageCircle, X } from "lucide-react";

import { logo } from "@/public/index";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lenis = useLenis();
  const scrollY = useMotionValue(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const background = useTransform(
    scrollY,
    [0, 200],
    ["rgba(14, 14, 14, 0)", "rgba(14, 14, 14, 0.8)"]
  );
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(24px)"]);
  const border = useTransform(
    scrollY,
    [0, 200],
    ["rgba(119, 0, 32, 0)", "rgba(119, 0, 32, 0.4)"]
  );

  const navItemsOne = [
    { href: "/#services", label: "Services", id: "services" },
    { href: "/#case_studies", label: "Case Studies", id: "case_studies" },
    { href: "/#work_progress", label: "Work Progression", id: "work_progress" },
  ];

  const navItemsTwo = [
    { href: "/", label: "Request a Quote", icon: <MessageCircle size={18} /> },
    { href: "/", label: "Sign Up", icon: <LogIn size={18} /> },
  ];

  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const underlineX = useMotionValue(0);
  const underlineWidth = useMotionValue(0);
  const underlineScale = useMotionValue(1);

  useEffect(() => {
    if (!lenis) return;

    const updateScroll = ({ scroll }: { scroll: number }) => {
      scrollY.set(scroll);
    };

    lenis.on("scroll", updateScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        if (intersectingEntry) {
          setActiveTab(intersectingEntry.target.id);
        } else {
          setActiveTab(null);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observerRef.current = observer;

    navItemsOne.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      lenis.off("scroll", updateScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lenis, navItemsOne, scrollY]);

  useEffect(() => {
    if (activeTab) {
      const activeRef = navRefs.current[activeTab];
      if (activeRef) {
        const { offsetLeft, offsetWidth } = activeRef;
        animate(underlineX, offsetLeft, {
          type: "spring",
          stiffness: 200,
          damping: 40,
        });
        animate(underlineWidth, offsetWidth, {
          type: "spring",
          stiffness: 200,
          damping: 40,
        });
        animate(underlineScale, 1, {
          type: "spring",
          stiffness: 300,
          damping: 40,
        });
      }
    } else {
      animate(underlineScale, 0, {
        type: "spring",
        stiffness: 300,
        damping: 40,
      });
    }
  }, [activeTab, underlineX, underlineWidth, underlineScale]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className="z-50 fixed top-0 left-0 right-0 w-full py-3 px-6 border-b"
      style={{
        backgroundColor: background,
        backdropFilter: blur,
        borderColor: border,
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-40 md:w-50 shrink-0"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 text-lg">
            <div className="hidden lg:flex items-center gap-1 text-lg border-2 border-accent p-1 rounded-2xl">
              <div className="relative">
                {navItemsOne.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    ref={(el) => {
                      navRefs.current[item.id] = el;
                    }}
                    className="relative px-2 active:scale-97 duration-150 z-10"
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
                <motion.div
                  className="absolute inset-0 bg-accent rounded-xl"
                  style={{
                    x: underlineX,
                    width: underlineWidth,
                    scale: underlineScale,
                    originX: 0.5,
                  }}
                />
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-lg border-2 border-accent p-1 rounded-2xl">
              {navItemsTwo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-2 active:scale-97 duration-200 hover:bg-accent/60 rounded-xl"
                >
                  <span className="flex items-center gap-1.5">
                    {item.icon}
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div
              className="relative rounded-xl sm:rounded-2xl lg:hidden p-1.5 sm:p-2 bg-accent/50 border-2 border-accent active:scale-97 duration-150 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <motion.div
                  key="x-icon"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              )}
              <AnimatePresence>
                {" "}
                {/* Wrap with AnimatePresence */}
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 40 }}
                    className="lg:hidden absolute max-w-fit top-[calc(100%+1.5rem)] right-0 border-2 border-accent/40 bg-accent/80 rounded-2xl p-6 shadow-lg flex flex-col gap-4 items-end select-none z-40 backdrop-blur-3xl"
                  >
                    <nav className="flex flex-col items-end gap-4">
                      {navItemsOne.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-lg font-bold text-foreground hover:text-accent transition-colors duration-200 whitespace-nowrap"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      {navItemsTwo.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="sm:hidden text-lg font-bold text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
