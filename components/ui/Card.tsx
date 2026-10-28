import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "none" | "water" | "teal" | "green";
  hoverable?: boolean;
}

export function Card({
  className,
  accent = "none",
  hoverable = false,
  children,
  ...props
}: CardProps) {
  const accentBorder = {
    none: "",
    water: "border-l-4 border-l-water",
    teal: "border-l-4 border-l-teal",
    green: "border-l-4 border-l-sdggreen",
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-white dark:bg-navy-800 border border-slate-200/80 dark:border-navy-700/80 p-6 shadow-sm",
        accentBorder[accent],
        hoverable &&
          "transition-all duration-300 hover:shadow-water hover:-translate-y-1 hover:border-water/40 dark:hover:border-water-500/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
