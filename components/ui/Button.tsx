import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "teal" | "green" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

    const variantStyles = {
      primary:
        "bg-water hover:bg-water-600 text-white shadow-sm hover:shadow-water",
      secondary:
        "bg-navy text-white hover:bg-navy-700 dark:bg-navy-700 dark:hover:bg-navy-600 shadow-sm",
      teal:
        "bg-teal hover:bg-teal-600 text-white shadow-sm",
      green:
        "bg-sdggreen hover:bg-sdggreen-600 text-white shadow-sm",
      outline:
        "border-2 border-water text-water hover:bg-water-50 dark:border-water-400 dark:text-water-400 dark:hover:bg-navy-800",
      ghost:
        "text-navy hover:bg-water-50 dark:text-navy-100 dark:hover:bg-navy-800",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
      md: "px-5 py-2.5 text-sm sm:text-base gap-2",
      lg: "px-6 py-3.5 text-base sm:text-lg gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
