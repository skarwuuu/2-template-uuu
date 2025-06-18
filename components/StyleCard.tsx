/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { toast as sonnerToast } from "sonner";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

interface StyleCardProps {
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
  name: string;
}

interface ToastProps {
  id: string | number;
  text: string;
  src: StaticImageData;
  alt: string;
}

function Toast(props: ToastProps) {
  const { text, src, alt, id } = props;

  return (
    <div
      key={id}
      className="bg-stone-800 px-4 py-3 rounded-xl flex items-center justify-between w-full max-w-sm z-0"
    >
      <div className="flex items-center gap-3">
        <Image src={src} alt={alt} width={40} height={40} className="rounded-md" />
        <p className="font-medium font-sans text-sm text-stone-300">{text}</p>
      </div>
      <button
        onClick={() => sonnerToast.dismiss(id)}
        className="ml-4 flex-shrink-0 text-xs font-semibold bg-stone-700 hover:bg-stone-600 transition-colors active:scale-95 px-2 py-1 rounded-lg cursor-none"
      >
        Undo
      </button>
    </div>
  );
}

function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <div className="z-0">
      <Toast id={id} text={toast.text} src={toast.src} alt={toast.alt} />
    </div>
  ));
}

export default function StyleCard({ image, alt, width, height, name }: StyleCardProps) {
  return (
    <motion.div className="border-2 border-stone-800 px-6 py-4 lg:py-6 rounded-2xl flex flex-col gap-4 max-w-sm">
      <div>
        <Image src={image} alt={alt} width={width} height={height} className="w-full rounded-xl" />
      </div>
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <button
          onClick={() =>
            toast({
              text: `${name} E-Cigar was added to the cart.`,
              src: image,
              alt: name,
            })
          }
          className="px-1.5 py-0.5 bg-stone-400 text-stone-800 border-2 border-stone-400 font-medium active:scale-95 duration-200 cursor-none rounded-lg flex items-center gap-2 w-fit"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
