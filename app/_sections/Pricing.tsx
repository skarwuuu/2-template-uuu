/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import {
  Check,
  LayoutDashboard,
  Users,
  Database,
  FileText,
  Mail,
  BarChart2,
  FileBadge,
  LifeBuoy,
  Download,
  Activity,
  Award,
  Puzzle,
  UserCheck,
  Cpu,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import Badge from "@/components/Badge";

type Feature = {
  text: string;
  icon: string;
};

type PricingTier = {
  title: string;
  description: string;
  price: number;
  buttonText: string;
  popular: boolean;
  features: Feature[];
};

const pricingTiers: PricingTier[] = [
  {
    title: "Free",
    description: "Perfect for individuals and small teams just getting started with analytics",
    price: 0,
    buttonText: "Get started for free",
    popular: false,
    features: [
      { text: "Basic analytics dashboard", icon: "LayoutDashboard" },
      { text: "Up to 5 team members", icon: "Users" },
      { text: "2GB data storage", icon: "Database" },
      { text: "Basic report generation", icon: "FileText" },
      { text: "Email support", icon: "Mail" },
    ],
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses that need more advanced analytics capabilities",
    price: 9,
    buttonText: "Sign up now",
    popular: true,
    features: [
      { text: "Advanced analytics dashboard", icon: "BarChart2" },
      { text: "Up to 50 team members", icon: "Users" },
      { text: "50GB data storage", icon: "Database" },
      { text: "Custom report templates", icon: "FileBadge" },
      { text: "Priority support", icon: "LifeBuoy" },
      { text: "Data export capabilities", icon: "Download" },
      { text: "Real-time analytics", icon: "Activity" },
    ],
  },
  {
    title: "Business",
    description: "Enterprise-grade solution for large organizations with complex analytics needs",
    price: 19,
    buttonText: "Sign up now",
    popular: false,
    features: [
      { text: "Enterprise analytics suite", icon: "Award" },
      { text: "Unlimited team members", icon: "Users" },
      { text: "200GB data storage", icon: "Database" },
      { text: "Custom integrations", icon: "Puzzle" },
      { text: "Dedicated account manager", icon: "UserCheck" },
      { text: "Custom analytics models", icon: "Cpu" },
      { text: "Advanced data visualization", icon: "LineChart" },
      { text: "Advanced security & compliance", icon: "ShieldCheck" },
    ],
  },
];

const IconMap: { [key: string]: React.ElementType } = {
  LayoutDashboard,
  Users,
  Database,
  FileText,
  Mail,
  BarChart2,
  FileBadge,
  LifeBuoy,
  Download,
  Activity,
  Award,
  Puzzle,
  UserCheck,
  Cpu,
  LineChart,
  ShieldCheck,
  Check,
};

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-10 md:py-[50] xl:py-15">
      <div className="container mx-auto">
        <div className="space-y-6">
          <h3 className="font-semibold pb-2 text-3xl md:text-4xl xl:text-5xl tracking-tighter md:tracking-tight text-transparent bg-gradient-to-br from-neutral-50 to-neutral-700 bg-clip-text text-center">
            Pricing plans
          </h3>
          <p className="-mt-2 text-balance text-md sm:text-lg lg:text-xl text-neutral-200 tracking-tight text-center">
            Upgrade for advanced insights, unlimited data storage, and enterprise-grade features.
          </p>

          <div className="mt-10 flex flex-col lg:flex-row gap-8 max-w-sm lg:max-w-5xl mx-auto">
            {pricingTiers.map(
              ({ title, description, price, buttonText, popular, features }, index) => (
                <div
                  key={index}
                  className="relative flex flex-col bg-neutral-950/30 backdrop-blur-lg px-4 py-6 rounded-2xl border-2 border-neutral-800 lg:flex-1"
                >
                  {popular && (
                    <div className="absolute inset-0 -z-10 bg-conic-0 from-transparent from-20% via-blue-900/70 to-80% to-transparent blur-2xl" />
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-semibold">
                        $<span>{price}</span>
                      </span>{" "}
                      <span className="text-sm">/mo</span>
                    </div>
                    {popular && <Badge label="Most Popular" />}
                  </div>
                  <h3 className="mt-5 font-semibold text-xl">{title}</h3>
                  <h3 className="mt-2.5 text-sm text-neutral-400">{description}</h3>
                  <ul className="my-5 flex flex-col gap-4 px-2 py-4 border-t-2 border-neutral-700 rounded-md ">
                    {features.map(({ text, icon }) => {
                      const IconComponent = IconMap[icon] || Check;
                      return (
                        <li key={text} className="flex items-start gap-2">
                          <IconComponent className="size-5" />
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button className="mt-auto w-full bg-neutral-300 hover:bg-neutral-100 active:bg-neutral-200 duration-200  text-neutral-950 p-2 rounded-lg font-semibold tracking-wide cursor-pointer">
                    {buttonText}
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
