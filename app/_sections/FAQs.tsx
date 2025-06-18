/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What makes Palistor different from other e-cigarette brands?",
    answer:
      "Palistor stands out with our premium quality materials, innovative technology, and commitment to safety. Our devices feature advanced temperature control, leak-proof designs, and long-lasting batteries, setting new standards in the vaping industry.",
  },
  {
    question: "Are Palistor products suitable for beginners?",
    answer:
      "Absolutely! We offer a range of products designed for all experience levels. Our starter kits come with everything you need to begin, including detailed user guides and safety instructions. Our customer support team is always ready to help you get started.",
  },
  {
    question: "How do I maintain my Palistor device?",
    answer:
      "Regular maintenance is simple with Palistor. Clean your device weekly, replace coils as needed, and store in a cool, dry place. We provide detailed maintenance guides with each product, and our website features video tutorials for proper care.",
  },
  {
    question: "What safety features do Palistor devices include?",
    answer:
      "All Palistor devices come with multiple safety features including overcharge protection, short-circuit prevention, and automatic shut-off. Our products meet international safety standards and undergo rigorous testing before release.",
  },
  {
    question: "Where can I find replacement parts and accessories?",
    answer:
      "Replacement parts and accessories are available through our official website and authorized retailers. We maintain a comprehensive inventory of coils, tanks, batteries, and other components to ensure you can always find what you need.",
  },
];

export default function FAQs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="faqs"
      className="px-4 lg:px-20 my-20 md:my-25 lg:my-30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-center">
          FAQs
        </h1>
        <p className="mt-3 font-semibold w-fit mx-auto text-center md:text-lg xl:text-xl">
          Clarify your doubts beforehand.
        </p>
        <div className="mt-6 flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-stone-800 border-2 border-stone-800 rounded-xl active:scale-95 duration-200"
            >
              <div
                className="flex gap-2 justify-between items-center p-4"
                onClick={() => setSelectedIndex(selectedIndex === index ? -1 : index)}
              >
                <div className="text-lg lg:text-xl font-medium select-none text-stone-300">
                  {faq.question}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d6d3d1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-200 ${
                    selectedIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mb-4 mx-4">
                      <p className="text-stone-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
