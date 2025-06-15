/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Hero from "@/app/_sections/Hero";
import Patnerships from "@/app/_sections/Patnerships";
import Showcase from "@/app/_sections/Showcase";
import Pricing from "@/app/_sections/Pricing";
import Testimonials from "./_sections/Testimonials";
import CTA from "./_sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Patnerships />
      <Showcase />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
