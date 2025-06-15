"use client";

/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "/", icon: "/assets/socials/social-insta.svg" },
    { name: "X", href: "/", icon: "/assets/socials/social-x.svg" },
    { name: "LinkedIn", href: "/", icon: "/assets/socials/social-linkedin.svg" },
    { name: "Pinterest", href: "/", icon: "/assets/socials/social-pin.svg" },
    { name: "YouTube", href: "/", icon: "/assets/socials/social-youtube.svg" },
  ];

  const linkGroups = [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "/" },
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Customers", href: "/#testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Contact", href: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help", href: "/" },
        { name: "Sales", href: "/" },
        { name: "Advertise", href: "/" },
        { name: "Privacy", href: "/" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black from-50% to-blue-900/30 pt-px overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-blue-900/30" />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Brand and Socials */}
          <div className="flex-shrink-0 lg:w-1/3">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/assets/logo.svg"}
                alt="logo"
                width={140}
                height={140}
                className="size-9"
              />
              <span className="text-3xl font-semibold text-white">Palisto Project</span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-xs">
              Think Exponentially. Grow without limitations.
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  <Image src={social.icon} alt={social.name} width={30} height={30} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold tracking-wider text-neutral-100 text-lg">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-neutral-400 hover:text-neutral-200 font-medium transition-colors w-fit"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Palisto Project. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-500">
            <Link href="/" className="hover:text-neutral-100 transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/" className="hover:text-neutral-100 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
