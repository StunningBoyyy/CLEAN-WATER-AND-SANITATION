"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Droplets } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/the-issue", label: "The Issue" },
  { href: "/why-it-matters", label: "Why It Matters" },
  { href: "/solutions", label: "Solutions" },
  { href: "/take-action", label: "Take Action" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-200 glass-panel border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-water/10 dark:bg-water/20 flex items-center justify-center text-water group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 fill-current text-water" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-navy dark:text-white leading-tight">
                Clean Water & Sanitation
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
                UN SDG 6 Awareness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-water/10 text-water dark:bg-water/20 dark:text-water-300 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:text-water hover:bg-water-50/50 dark:hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Theme toggle & CTA / Mobile menu */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Link
              href="/take-action"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-water hover:bg-water-600 rounded-xl transition-all shadow-sm hover:shadow-water active:scale-95"
            >
              Take Action
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileNavOpen}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
