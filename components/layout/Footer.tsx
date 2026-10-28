import React from "react";
import Link from "next/link";
import { Droplet, ExternalLink, Heart } from "lucide-react";
import { OFFICIAL_SOURCE } from "@/data/facts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-navy-700/80">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-water/20 flex items-center justify-center text-water-300">
                <Droplet className="w-5 h-5 fill-current" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Clean Water & Sanitation
              </span>
            </div>
            <p className="text-sm font-semibold text-water-300 tracking-wide">
              &ldquo;Every drop matters.&rdquo;
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clean water • Safe sanitation • Healthy communities. Dedicated to advancing United Nations Sustainable Development Goal 6 (SDG 6).
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-teal-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/the-issue"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  The Global Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/why-it-matters"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Why It Matters
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Actionable Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/take-action"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Take Action & Pledge
                </Link>
              </li>
            </ul>
          </div>

          {/* Project & Legal */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-teal-400 mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Founders & Project
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy & Data Policy
                </Link>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOURCE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  WHO/UNICEF JMP Report
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Founders & Leadership */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-teal-400 mb-4">
              Leadership
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Founded and engineered by:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-water-600/50 flex items-center justify-center text-[10px] font-bold text-water-200">
                  VV
                </div>
                <span>Vishwa Vijay</span>
                <span className="text-xs text-slate-400 font-normal">(Co-Founder)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-teal-600/50 flex items-center justify-center text-[10px] font-bold text-teal-200">
                  PS
                </div>
                <span>Prateek Saroj</span>
                <span className="text-xs text-slate-400 font-normal">(Co-Founder)</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Focus: Design • User Research • Web Engineering
            </p>
          </div>
        </div>

        {/* Bottom Bar: Source Citation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            {OFFICIAL_SOURCE.citation}{" "}
            <span className="text-slate-400">
              Data reflects global indicators through 2024. Not affiliated with WHO or UNICEF.
            </span>
          </p>
          <div className="flex items-center gap-2">
            <span>© {currentYear} Clean Water & Sanitation Project. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
            <span>for SDG 6.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
