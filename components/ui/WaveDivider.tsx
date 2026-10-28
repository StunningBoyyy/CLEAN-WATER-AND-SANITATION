import React from "react";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}

export function WaveDivider({
  fillColor = "currentColor",
  className,
  inverted = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none",
        inverted && "transform rotate-180",
        className
      )}
    >
      <svg
        className="relative block w-full h-8 sm:h-12 md:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
