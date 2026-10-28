import React from "react";
import { cn } from "@/lib/utils";

interface ProgressRingProps {
  progress: number; // 0 - 100
  size?: number;
  strokeWidth?: number;
  color?: "water" | "teal" | "green";
  label?: string;
  className?: string;
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 10,
  color = "water",
  label,
  className,
}: ProgressRingProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  const strokeColors = {
    water: "stroke-water",
    teal: "stroke-teal",
    green: "stroke-sdggreen",
  };

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      role="progressbar"
      aria-valuenow={Math.round(clampedProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || `Progress: ${Math.round(clampedProgress)}%`}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-slate-100 dark:stroke-navy-700 fill-none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={cn(
            "fill-none transition-all duration-500 ease-out",
            strokeColors[color]
          )}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-heading text-2xl font-bold text-navy dark:text-white">
          {Math.round(clampedProgress)}%
        </span>
        {label && (
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 px-2 truncate max-w-full">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
