/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { StaticImageData } from "next/image";

import art_1 from "@/public/assets/art/1.jpg";
import art_2 from "@/public/assets/art/2.jpg";
import art_3 from "@/public/assets/art/3.jpg";
import art_4 from "@/public/assets/art/4.jpg";
import art_5 from "@/public/assets/art/5.jpg";

const features = [
  {
    image: art_1,
    alt: "feature-1",
    width: 501,
    height: 501,
    text: "Our E-cigars delivers unmatched vapor production and flavor intensity, setting new industry standards.",
  },
  {
    image: art_2,
    alt: "feature-2",
    width: 736,
    height: 736,
    text: "Each variant features advanced temperature control and customizable settings.",
  },
  {
    image: art_3,
    alt: "feature-3",
    width: 540,
    height: 540,
    text: "The sleek, ergonomic design combines luxury with functionality, with our long-lasting battery.",
  },
  {
    image: art_4,
    alt: "feature-1",
    width: 501,
    height: 501,
    text: "Experience the perfect draw with our airflow system, delivering a smooth puff every time.",
  },
  {
    image: art_5,
    alt: "feature-2",
    width: 736,
    height: 736,
    text: "Enjoy our long-lasting, fast-charging batteries that keep you powered up for an uninterrupted experience.",
  },
];

const ROTATION_RANGE: number = 15;
const HALF_ROTATION_RANGE: number = ROTATION_RANGE / 2;
const Z_TRANSLATE_IMAGE: number = 75;
const Z_TRANSLATE_TEXT: number = 50;

interface FeatureCardProps {
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
  text: string;
}

const TiltFeatureCard: React.FC<FeatureCardProps> = ({ image, alt, width, height, text }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;

    const rect: DOMRect = ref.current.getBoundingClientRect();

    const currentWidth: number = rect.width;
    const currentHeight: number = rect.height;

    const mouseX: number = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY: number = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX: number = (mouseY / currentHeight - HALF_ROTATION_RANGE) * -1;
    const rY: number = mouseX / currentWidth - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: transform,
      }}
      className="border-2 border-stone-800 px-6 py-4 lg:py-6 rounded-2xl flex flex-col gap-4 max-w-xs"
    >
      <motion.div
        style={{
          transform: `translateZ(${Z_TRANSLATE_IMAGE}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="w-full max-h-50 rounded-xl"
        />
      </motion.div>
      <motion.p
        style={{
          transform: `translateZ(${Z_TRANSLATE_TEXT}px)`,
        }}
        className="text-sm text-center text-balance font-semibold text-stone-400 bg-[#211d1b] p-2 rounded-xl"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default function Features() {
  const [isLgOrLarger, setIsLgOrLarger] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsLgOrLarger(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const displayedFeatures = features;

  return (
    <section id="features" className="px-4 my-10 md:my-12 lg:my-15 scroll-mt-20">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-center">
            Features
          </h1>
          <p className="mt-3 font-semibold w-fit mx-auto text-center md:text-lg xl:text-xl">
            Experience the future of vaping with our revolutionary e-cigars.
          </p>
        </div>
        <div className="mt-6 flex justify-center flex-wrap gap-4 max-w-5xl mx-auto">
          {displayedFeatures.map((feature, index) =>
            isLgOrLarger ? (
              <TiltFeatureCard
                key={index}
                image={feature.image}
                alt={feature.alt}
                width={feature.width}
                height={feature.height}
                text={feature.text}
              />
            ) : (
              <div
                key={index}
                className="border-2 border-stone-800 px-6 py-4 lg:py-6 rounded-2xl flex flex-col gap-4 max-w-xs"
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className="w-full max-h-50 rounded-xl"
                />
                <p className="text-sm text-center text-balance font-semibold text-stone-400 bg-[#211d1b] p-2 rounded-xl">
                  {feature.text}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
