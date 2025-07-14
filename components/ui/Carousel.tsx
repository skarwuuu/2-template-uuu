/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, PanInfo, animate } from "motion/react";

type CarouselItem = {
  text: string;
  imageSrc: string | StaticImageData;
  bgImage: StaticImageData;
};

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const x = useMotionValue(0);
  const motionRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".carousel-card");
      if (firstCard) {
        setCardWidth(firstCard.getBoundingClientRect().width);
      }
    }
  }, [items]);

  useEffect(() => {
    if (containerRef.current && motionRef.current) {
      const viewportWidth = containerRef.current.offsetWidth;
      const contentWidth = motionRef.current.scrollWidth;
      setConstraints({ left: -(contentWidth - viewportWidth), right: 0 });
    }
  }, [items]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLg(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const direction = velocity < 0 || offset < 0 ? 1 : -1;
    let newIndex = currentIndex + direction;
    if (Math.abs(offset) < cardWidth / 3 && Math.abs(velocity) < 500) {
      newIndex = currentIndex;
    }
    newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
    const newX = -newIndex * cardWidth;
    animate(x, newX, { type: "spring", stiffness: 500, damping: 35 });
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, items.length - 1);
    const newX = -newIndex * cardWidth;
    animate(x, newX, { type: "spring", stiffness: 500, damping: 35 });
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    const newX = -newIndex * cardWidth;
    animate(x, newX, { type: "spring", stiffness: 500, damping: 35 });
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    x.set(-currentIndex * cardWidth);
  }, [currentIndex, cardWidth, x]);

  return (
    <div
      ref={containerRef}
      className="w-full lg:w-[90%] mx-auto overflow-hidden relative select-none"
    >
      <motion.div
        ref={motionRef}
        className="flex gap-0 lg:gap-4"
        {...(!isLg && {
          drag: "x",
          dragConstraints: constraints,
          dragElastic: 0.3,
          dragMomentum: false,
          dragTransition: { bounceStiffness: 600, bounceDamping: 35 },
          onDragEnd: handleDragEnd,
        })}
        style={{ x }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-card flex-shrink-0 w-full lg:w-1/3 flex items-start gap-6 p-6 rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-lg md:text-xl text-balance p-3">{item.text}</p>
              <button className="text-sm md:text-base flex items-center gap-1 py-1 px-3 bg-background/60 active:scale-97 duration-150 mt-auto rounded-xl">
                Learn More
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={prevSlide}
          className="border-2 border-accent/40 bg-gradient-to-br from-accent/30 to-accent/5 p-2 active:scale-97 duration-150 rounded-2xl"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="border-2 border-accent/40 bg-gradient-to-br from-accent/30 to-accent/5 p-2 active:scale-97 duration-150 rounded-2xl"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
