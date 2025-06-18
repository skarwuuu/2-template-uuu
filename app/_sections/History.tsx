/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { useState } from "react";

import history_1 from "@/public/assets/history/history_1.jpg";
import history_2 from "@/public/assets/history/history_2.jpg";
import history_3 from "@/public/assets/history/history_3.jpg";

const images = [
  { id: "1", src: history_1, alt: "History Image 1", text: "store indoors" },
  { id: "2", src: history_2, alt: "History Image 2", text: "store front" },
  { id: "3", src: history_3, alt: "History Image 3", text: "local area" },
];

export default function History() {
  const [active, setActive] = useState(0);

  const randomRotateY = (): number => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    if (info.offset.x < -100) {
      setActive((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 100) {
      setActive((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const isActive = (index: number): boolean => index === active;

  return (
    <section
      id="history"
      className="px-4 lg:px-20 my-20 md:my-25 lg:my-30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-center">
          History
        </h1>
        <p className="mt-3 font-semibold w-fit mx-auto text-center md:text-lg xl:text-xl">
          Discover our journey through time and innovation.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-25 py-10">
          <div className="relative w-120 h-80 flex items-center justify-center">
            <AnimatePresence>
              {images.map((image, index) => {
                const currentZIndex: number = isActive(index) ? 40 : images.length + 2 - index;
                const currentRotateY: number = isActive(index) ? 0 : randomRotateY();

                return (
                  <motion.div
                    key={image.id}
                    {...(isActive(index) && {
                      drag: "x",
                      dragConstraints: { left: -50, right: 50, top: 0, bottom: 0 },
                      dragElastic: 0.5,
                      onDragEnd: handleDragEnd,
                      dragSnapToOrigin: true,
                    })}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: currentRotateY,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: currentRotateY,
                      zIndex: currentZIndex,
                      y: isActive(index) ? [0, -40, 0] : 0,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute max-w-xs mx-auto inset-0 origin-bottom p-5 bg-stone-300 flex flex-col items-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full object-cover object-center select-none"
                    />
                    <p className="text-stone-800 text-3xl font-bold pt-4 font-cursive">
                      {image.text}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <p className="mt-3 font-semibold w-fit md:text-lg xl:text-xl text-justify max-w-md lg:max-w-none mx-auto min-[1330px]:leading-10">
            From our humble beginnings in 1988 as a small local shop to becoming the leading e-cigar
            manufacturer in 2025, our journey has been marked by innovation and dedication to
            quality. We started with just three employees and a single product line, gradually
            expanding our reach through word-of-mouth and exceptional customer service. By 1998, we
            had established our first international distribution network, and in 2007, we
            revolutionized the industry with our patented temperature control technology. Today, we
            proudly serve customers in over 50 countries, maintaining our commitment to excellence
            while continuously pushing the boundaries of what&apos;s possible in e-cigar technology.
          </p>
        </div>
      </div>
    </section>
  );
}
