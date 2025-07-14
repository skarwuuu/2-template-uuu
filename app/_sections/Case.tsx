/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Carousel from "@/components/ui/Carousel";
import { StaticImageData } from "next/image";
import {
  meshOne,
  meshTwo,
  meshThree,
  lineOne,
  lineTwo,
  lineThree,
} from "@/public";

type CarouselItem = {
  text: string;
  imageSrc: string | StaticImageData;
  bgImage: StaticImageData;
};

export default function Case() {
  const items: CarouselItem[] = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      imageSrc: lineOne,
      bgImage: meshOne,
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      imageSrc: lineTwo,
      bgImage: meshTwo,
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      imageSrc: lineThree,
      bgImage: meshThree,
    },
  ];

  return (
    <section
      id="case_studies"
      className="px-4 md:px-8 lg:px-16 py-10 md:py-15 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              Case Studies
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/80 text-justify">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
          <Carousel items={items} />
        </div>
      </div>
    </section>
  );
}
