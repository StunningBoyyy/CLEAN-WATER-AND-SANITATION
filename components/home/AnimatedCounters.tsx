"use client";

import React, { useEffect, useRef, useState } from "react";
import { Droplet, ShieldAlert, Sparkles } from "lucide-react";
import { HERO_COUNTERS } from "@/data/facts";

export function AnimatedCounters() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-16 -mt-8 relative z-20"
      aria-label="Global Impact Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HERO_COUNTERS.map((counter, idx) => {
            return (
              <CounterCard
                key={counter.id}
                counter={counter}
                isVisible={isVisible}
                delay={idx * 150}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface CounterCardProps {
  counter: (typeof HERO_COUNTERS)[0];
  isVisible: boolean;
  delay: number;
}

function CounterCard({ counter, isVisible, delay }: CounterCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayValue(counter.value);
      return;
    }

    const timer = setTimeout(() => {
      const duration = 1400; // ms
      const steps = 30;
      const intervalTime = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        // Ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        const currentVal = Number((counter.value * eased).toFixed(1));

        if (currentStep >= steps) {
          setDisplayValue(counter.value);
          clearInterval(interval);
        } else {
          setDisplayValue(currentVal);
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, delay, counter.value]);

  const icons = {
    water: <Droplet className="w-6 h-6 text-water" />,
    teal: <ShieldAlert className="w-6 h-6 text-teal" />,
    green: <Sparkles className="w-6 h-6 text-sdggreen" />,
  };

  const accentColors = {
    water: "border-t-4 border-t-water bg-water/5 dark:bg-water/10",
    teal: "border-t-4 border-t-teal bg-teal/5 dark:bg-teal/10",
    green: "border-t-4 border-t-sdggreen bg-sdggreen/5 dark:bg-sdggreen/10",
  };

  return (
    <div
      className={`rounded-2xl bg-white dark:bg-navy-800 p-6 md:p-8 shadow-sm border border-slate-200/80 dark:border-navy-700/80 ${
        accentColors[counter.accent as keyof typeof accentColors]
      } flex flex-col justify-between transition-all duration-300 hover:shadow-water hover:-translate-y-1`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-navy-700 shadow-sm flex items-center justify-center">
            {icons[counter.accent as keyof typeof icons]}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300">
            JMP 2025 Data
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white tracking-tight">
            {displayValue.toFixed(1)}
          </span>
          <span className="font-heading text-2xl font-bold text-water">
            {counter.unit}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-base sm:text-lg text-navy dark:text-white mb-2">
          {counter.label}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {counter.subtext}
        </p>
      </div>
    </div>
  );
}
