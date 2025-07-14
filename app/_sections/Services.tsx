/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";
import Card from "@/components/ui/Card";
import {
  waves,
  meshOne,
  meshTwo,
  meshThree,
  meshFour,
  meshFive,
  meshSix,
  lineOne,
  lineTwo,
  lineThree,
  lineFour,
  lineFive,
  lineSix,
} from "@/public";
import { CirclePercent } from "lucide-react";

const servicesData = [
  {
    label: "Search Engine Optimization",
    imageSrc: lineOne,
    bgImage: meshOne,
  },
  {
    label: "Pay-per-click Adverts",
    imageSrc: lineTwo,
    bgImage: meshTwo,
  },
  {
    label: "Social Media Marketing",
    imageSrc: lineThree,
    bgImage: meshThree,
  },
  {
    label: "Email Marketing",
    imageSrc: lineFour,
    bgImage: meshFour,
  },
  {
    label: "Content Creation",
    imageSrc: lineFive,
    bgImage: meshFive,
  },
  {
    label: "Analytics and Tracking",
    imageSrc: lineSix,
    bgImage: meshSix,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 md:px-8 lg:px-16 py-10 md:py-15 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Services</h2>
              <p className="text-sm md:text-base lg:text-lg text-foreground/80 text-justify">
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {servicesData.map((service, index) => (
                <Card
                  key={index}
                  label={service.label}
                  imageSrc={service.imageSrc}
                  bgImage={service.bgImage}
                />
              ))}
            </div>
          </div>
          <div className="border-2 border-accent/40 bg-gradient-to-br from-accent/30 to-accent/5 p-6 lg:p-10 flex items-center gap-10 lg:w-[80%] rounded-2xl">
            <div className="flex flex-col gap-8 items-start md:w-3/5">
              <div className="flex flex-col gap-4 items-start">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-balance">
                  Let’s make things happen.
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-foreground/80">
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 border-2 border-foreground/20 bg-accent/20 active:scale-97 duration-150 md:text-lg lg:text-xl w-full md:w-fit rounded-2xl">
                <CirclePercent size={20} />
                Get your Free Proposal
              </button>
            </div>
            <div className="hidden md:flex items-center justify-center w-2/5">
              <Image src={waves} alt="waves" className="w-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
