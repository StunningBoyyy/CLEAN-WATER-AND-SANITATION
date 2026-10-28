"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
