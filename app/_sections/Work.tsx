/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Waves from "@/components/bg/Waves";

type WorkItem = {
  title: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    title: "01 Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "02 Research and Strategy Development",
    description:
      "We conduct thorough research on your industry, competitors, and target audience to develop a customized digital marketing strategy that aligns with your goals.",
  },
  {
    title: "03 Implementation",
    description:
      "Our team executes the strategy across various channels including SEO, PPC, social media, and content marketing, ensuring seamless integration and deployment.",
  },
  {
    title: "04 Monitoring and Optimization",
    description:
      "We continuously monitor campaign performance using advanced analytics tools and make data-driven optimizations to improve results and ROI.",
  },
  {
    title: "05 Reporting and Communication",
    description:
      "Regular reports are provided with clear insights on performance metrics, and we maintain open communication to keep you informed and involved.",
  },
  {
    title: "06 Continual Improvement",
    description:
      "Based on ongoing analysis and feedback, we refine and evolve our strategies to ensure long-term success and adaptation to market changes.",
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="work_progress"
      className="px-4 md:px-8 lg:px-16 py-10 md:py-15 lg:py-20 overflow-hidden relative"
    >
      <Waves
        lineColor="#770020"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        maxCursorMove={0}
        xGap={12}
        yGap={36}
        className="-z-10 mask-x-from-60% mask-y-from-90%"
      />
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              How We Work
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/80 text-justify">
              Discover our step-by-step process for delivering successful
              digital marketing solutions.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-accent/40 bg-gradient-to-br from-accent/30 to-accent/5 rounded-2xl"
              >
                <button
                  className="flex gap-4 items-center justify-between w-full p-4 text-left active:scale-99 duration-150"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl md:text-3xl font-bold">
                      {item.title.split(" ")[0]}
                    </span>
                    <span className="text-lg md:text-xl">
                      {item.title.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-background rounded-b-2xl"
                    >
                      <div className="h-0.5 bg-accent/40 mx-auto" />
                      <p className="p-4 text-foreground/80 text-sm md:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
