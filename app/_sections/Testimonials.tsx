/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { TestimonialColumn } from "@/components/TestimonialColumn";

import avatar1 from "@/public/assets/avatar/avatar-1.png";
import avatar2 from "@/public/assets/avatar/avatar-2.png";
import avatar3 from "@/public/assets/avatar/avatar-3.png";
import avatar4 from "@/public/assets/avatar/avatar-4.png";
import avatar5 from "@/public/assets/avatar/avatar-5.png";
import avatar6 from "@/public/assets/avatar/avatar-6.png";
import avatar7 from "@/public/assets/avatar/avatar-7.png";
import avatar8 from "@/public/assets/avatar/avatar-8.png";
import avatar9 from "@/public/assets/avatar/avatar-9.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export type TestimonialsType = typeof testimonials;

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6).reverse();
const thirdCol = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-10 md:py-[50] xl:py-15">
      <div className="container mx-auto">
        <div className="space-y-6">
          <h3 className="font-semibold pb-2 text-3xl md:text-4xl xl:text-5xl tracking-tighter md:tracking-tight text-transparent bg-gradient-to-br from-neutral-50 to-neutral-700 bg-clip-text text-center">
            What our users say
          </h3>
          <p className="-mt-2 text-balance text-md sm:text-lg lg:text-xl text-neutral-200 tracking-tight text-center">
            From design to features, our app has become an essential tool for users around the
            world.
          </p>
          <div className="mt-8 flex gap-6 mask-y-from-80% mask-y-to-100% max-w-fit mx-auto">
            <TestimonialColumn testimonials={firstCol} className="h-150 max-w-xs" />
            <TestimonialColumn
              testimonials={secondCol}
              reverse
              className="hidden md:flex h-150 max-w-xs"
            />
            <TestimonialColumn testimonials={thirdCol} className="hidden lg:flex h-150 max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}
