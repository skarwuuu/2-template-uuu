/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import StyleCard from "@/components/StyleCard";
import type { StaticImageData } from "next/image";

import cigarBlack from "@/public/assets/product/cigar-black.png";
import cigarBrown from "@/public/assets/product/cigar-brown.png";
import cigarWhite from "@/public/assets/product/cigar-white.png";

interface Product {
  image: StaticImageData;
  alt: string;
  name: string;
}

export default function Styles() {
  const products: Product[] = [
    {
      image: cigarBlack,
      alt: "cigar-black",
      name: "Classic Black",
    },
    {
      image: cigarBrown,
      alt: "cigar-brown",
      name: "Elegant Brown",
    },
    {
      image: cigarWhite,
      alt: "cigar-white",
      name: "Pure White",
    },
  ];

  return (
    <section
      id="styles"
      className="px-4 lg:px-20 my-20 md:my-25 lg:my-30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-center">
          Styles
        </h1>
        <p className="mt-3 font-semibold w-fit mx-auto text-center md:text-lg xl:text-xl">
          Choose the one that fits you well.
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-4 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <StyleCard
              key={index}
              image={product.image}
              alt={product.alt}
              width={product.image.width}
              height={product.image.height}
              name={product.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
