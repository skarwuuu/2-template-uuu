/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  label: string;
  imageSrc: string | StaticImageData;
  bgImage: StaticImageData;
}

export default function Card({ label, imageSrc, bgImage }: CardProps) {
  return (
    <div
      className="flex items-center gap-6 p-6 max-w-90 lg:max-w-sm h-auto select-none rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-50 flex flex-col gap-4 items-start w-3/5">
        <div className="w-fit text-lg md:text-xl lg:text-2xl text-balance">
          {label}
        </div>
        <button className="text-sm md:text-base flex items-center gap-1 py-1 px-3 bg-background/60 active:scale-97 duration-150 mt-auto rounded-xl">
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>
      <div className="w-2/5 shrink-0 pointer-events-none select-none size-40 opacity-40">
        <Image
          src={imageSrc}
          alt={label}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
