/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { Fragment } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { motion } from "motion/react";

import discordLogo from "@/public/assets/patnerships/discord.png";
import figmaLogo from "@/public/assets/patnerships/figma.png";
import framerLogo from "@/public/assets/patnerships/framer.png";
import notionLogo from "@/public/assets/patnerships/notion.png";
import photoshopLogo from "@/public/assets/patnerships/photoshop.png";
import protopieLogo from "@/public/assets/patnerships/protopie.png";
import raindropLogo from "@/public/assets/patnerships/raindrop.png";
import slackLogo from "@/public/assets/patnerships/slack.png";

interface Logo {
  name: string;
  image: StaticImageData;
}

const logos: Logo[] = [
  { name: "Discord", image: discordLogo },
  { name: "Figma", image: figmaLogo },
  { name: "Framer", image: framerLogo },
  { name: "Notion", image: notionLogo },
  { name: "Photoshop", image: photoshopLogo },
  { name: "Protopie", image: protopieLogo },
  { name: "Raindrop", image: raindropLogo },
  { name: "Slack", image: slackLogo },
];

export default function Patnerships() {
  return (
    <section className="overflow-x-clip px-4 py-10 md:py-[50] xl:py-15">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center text-md sm:text-lg lg:text-xl">
          Already <span className="font-semibold text-blue-500">chosen</span> by these market
          leaders.
        </h3>
        <div className="flex overflow-hidden mt-6 mask-x-from-80% mask-x-to-100%">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none shrink-0 gap-10 md:gap-20 lg:gap-25 pr-10 md:pr-20 lg:pr-25"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.image}
                    alt={logo.name}
                    className="pointer-events-none select-none h-8 md:h-10 lg:h-12 w-auto object-contain"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
