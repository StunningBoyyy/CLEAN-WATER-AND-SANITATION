"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Droplet } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-navy-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-navy-800">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2 font-heading font-bold text-lg text-navy dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-water/10 dark:bg-water/20 flex items-center justify-center text-water">
                <Droplet className="w-5 h-5 fill-current" />
              </div>
              <span>SDG 6: Clean Water</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg text-slate-500 hover:text-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-water/10 text-water dark:bg-water/20 dark:text-water-300 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">Theme mode</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
