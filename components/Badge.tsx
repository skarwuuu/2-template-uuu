/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import { twMerge } from "tailwind-merge";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <div className={twMerge(" ", className)}>
      <div className="relative inline-block select-none animate-border-glow rounded-lg bg-[conic-gradient(from_var(--angle),theme(colors.neutral.900),theme(colors.blue.900),theme(colors.blue.500))] p-px">
        <div className="inline-flex items-center rounded-[0.45rem] bg-blue-900 px-2.5 py-1 text-sm tracking-tight text-blue-200">
          {label}
        </div>
      </div>
    </div>
  );
}
