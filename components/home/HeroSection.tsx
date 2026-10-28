"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-aqua/60 via-panel/30 to-transparent dark:from-navy-900/60 dark:via-navy-950 dark:to-transparent">
      {/* Background aquatic decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-water/10 dark:bg-water/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal/10 dark:bg-teal/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Messaging & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-water/10 dark:bg-water/20 text-water dark:text-water-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-water animate-pulse" />
              <span>United Nations Sustainable Development Goal 6</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-navy dark:text-white tracking-tight leading-[1.15]">
              Every drop <span className="text-water">matters.</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-teal dark:text-teal-400">
              Clean water • Safe sanitation • Healthy communities
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Safe drinking water and hygienic sanitation are basic human rights. Yet billions of people wake up each morning without them. Explore the real data, understand the root causes, and discover practical actions you can take today.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/the-issue"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md hover:shadow-water transition-all active:scale-98 gap-2 group"
              >
                <span>Understand the issue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/take-action"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-navy dark:text-white bg-white dark:bg-navy-800 hover:bg-slate-50 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-700 shadow-sm transition-all active:scale-98 gap-2"
              >
                <span>Take action</span>
              </Link>
            </div>

            {/* Quick trust badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sdggreen" />
                Verified WHO/UNICEF 2025 Data
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sdggreen" />
                Practical Daily Solutions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sdggreen" />
                Zero Commercial Agenda
              </span>
            </div>
          </div>

          {/* Right Column: Animated Water Drop Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              {/* Aquatic ripple rings */}
              <div className="absolute inset-0 rounded-full border border-water/20 dark:border-water/10 animate-ping opacity-25" />
              <div className="absolute inset-8 rounded-full border border-teal/20 dark:border-teal/10 animate-pulse" />

              {/* Main SVG Water Drop Illustration */}
              <svg
                viewBox="0 0 200 240"
                className="w-56 h-68 sm:w-64 sm:h-76 md:w-72 md:h-84 drop-shadow-2xl animate-float"
                role="img"
                aria-label="Illustration of an aquatic water drop with a glowing reflection"
              >
                <defs>
                  <linearGradient id="heroDropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#48A6E6" />
                    <stop offset="50%" stopColor="#2A88CF" />
                    <stop offset="100%" stopColor="#144870" />
                  </linearGradient>
                  <linearGradient id="innerRipple" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="highlightGlow" cx="35%" cy="30%" r="40%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="plantGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#279985" />
                    <stop offset="100%" stopColor="#67A74B" />
                  </linearGradient>
                </defs>

                {/* Drop Base */}
                <path
                  d="M100,16 C100,16 36,108 36,156 C36,192 64.6,220 100,220 C135.4,220 164,192 164,156 C164,108 100,16 100,16 Z"
                  fill="url(#heroDropGrad)"
                />

                {/* Internal Water Ripple Wave */}
                <path
                  d="M44,160 C60,172 80,150 100,162 C120,174 140,154 156,160 C154,188 130,212 100,212 C70,212 46,188 44,160 Z"
                  fill="url(#innerRipple)"
                  opacity="0.25"
                />

                {/* Sprouting leaf inside drop (symbolizing life, health and growth) */}
                <path
                  d="M100,185 C100,165 92,150 82,142 C94,142 105,152 105,175 Z"
                  fill="url(#plantGrad)"
                  opacity="0.9"
                />
                <path
                  d="M100,178 C102,160 114,148 124,144 C116,155 110,168 100,178 Z"
                  fill="url(#plantGrad)"
                  opacity="0.85"
                />

                {/* Primary specular highlight */}
                <ellipse
                  cx="74"
                  cy="125"
                  rx="16"
                  ry="36"
                  transform="rotate(-32 74 125)"
                  fill="url(#highlightGlow)"
                />
                {/* Secondary small specular dot */}
                <circle cx="128" cy="180" r="6" fill="#FFFFFF" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
