"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { HANDWASHING_STEPS } from "@/data/actions";

export function HandwashingStepper() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const step = HANDWASHING_STEPS[currentStepIndex];
  const isLast = currentStepIndex === HANDWASHING_STEPS.length - 1;
  const isFirst = currentStepIndex === 0;

  const handleNext = () => {
    if (!isLast) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
  };

  // Dedicated SVG illustrations for each step
  const renderStepSvg = (svgType: string) => {
    switch (svgType) {
      case "wet-apply":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Wet hands and apply soap">
            <circle cx="80" cy="80" r="70" className="fill-water/10 dark:fill-water/20" />
            {/* Water tap and water streams */}
            <path d="M50 35 L90 35 L90 50 L75 50 L75 60 L65 60 L65 50 L50 50 Z" className="fill-slate-400 dark:fill-slate-300" />
            <path d="M70 65 Q70 80 68 95 M70 65 Q73 85 75 100" stroke="#2A88CF" strokeWidth="3" strokeDasharray="4 3" strokeLinecap="round" />
            {/* Soap bar and lather bubbles */}
            <rect x="75" y="90" width="36" height="24" rx="8" className="fill-teal-500" />
            <circle cx="115" cy="85" r="7" className="fill-water-200 opacity-75" />
            <circle cx="125" cy="98" r="5" className="fill-water-200 opacity-75" />
            <circle cx="65" cy="115" r="8" className="fill-water-200 opacity-75" />
          </svg>
        );
      case "palm-to-palm":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Rub palm to palm">
            <circle cx="80" cy="80" r="70" className="fill-teal/10 dark:fill-teal/20" />
            {/* Left palm */}
            <path d="M55 110 C50 85 58 60 70 55 C76 52 82 58 82 70 L82 105 Z" className="fill-teal-400 opacity-80" />
            {/* Right palm overlapping */}
            <path d="M105 110 C110 85 102 60 90 55 C84 52 78 58 78 70 L78 105 Z" className="fill-teal-600 opacity-80" />
            {/* Circular motion arrows */}
            <path d="M60 45 A25 25 0 0 1 100 45" stroke="#279985" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrow)" />
            <path d="M100 120 A25 25 0 0 1 60 120" stroke="#279985" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "back-of-hands":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Rub back of hands and interlace fingers">
            <circle cx="80" cy="80" r="70" className="fill-water/10 dark:fill-water/20" />
            {/* Interlacing fingers silhouette */}
            <path d="M45 100 C45 75 55 50 65 48 C72 46 76 58 76 75 L76 110 Z" className="fill-water-400" />
            <path d="M70 105 C70 70 82 48 90 48 C98 48 102 65 102 110 Z" className="fill-water-600" />
            <path d="M95 110 C95 80 108 55 115 55 C122 55 125 75 125 110 Z" className="fill-water-500" />
            <circle cx="50" cy="50" r="6" className="fill-water-200" />
            <circle cx="120" cy="45" r="8" className="fill-water-200" />
          </svg>
        );
      case "thumbs-knuckles":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Rotate and scrub thumbs and knuckles">
            <circle cx="80" cy="80" r="70" className="fill-sdggreen/10 dark:fill-sdggreen/20" />
            {/* Clasping hand around thumb */}
            <ellipse cx="68" cy="80" rx="16" ry="32" className="fill-sdggreen-500" transform="rotate(-15 68 80)" />
            <circle cx="95" cy="80" r="22" className="fill-sdggreen-600 opacity-90" />
            {/* Rotational circular indicator */}
            <circle cx="80" cy="80" r="42" stroke="#67A74B" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
          </svg>
        );
      case "fingertips":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Rub fingertips on opposite palm">
            <circle cx="80" cy="80" r="70" className="fill-teal/10 dark:fill-teal/20" />
            {/* Open Palm base */}
            <path d="M40 100 C40 65 80 65 120 100 C100 120 60 120 40 100 Z" className="fill-teal-400 opacity-60" />
            {/* Fingertips grouping scrubbing */}
            <circle cx="70" cy="82" r="7" className="fill-teal-700" />
            <circle cx="82" cy="78" r="7" className="fill-teal-700" />
            <circle cx="94" cy="82" r="7" className="fill-teal-700" />
            <path d="M65 92 Q82 98 100 92" stroke="#1E7B6C" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "rinse-dry":
        return (
          <svg viewBox="0 0 160 160" className="w-40 h-40" role="img" aria-label="Rinse with clean water and dry thoroughly">
            <circle cx="80" cy="80" r="70" className="fill-water/10 dark:fill-water/20" />
            {/* Flowing clean water rinse */}
            <path d="M70 30 Q70 60 65 90 M80 30 Q80 65 80 95 M90 30 Q90 60 95 90" stroke="#2A88CF" strokeWidth="3" strokeLinecap="round" />
            {/* Clean towel */}
            <path d="M45 105 L115 105 L110 135 L50 135 Z" className="fill-slate-200 dark:fill-slate-600" />
            <path d="M50 135 L110 135" stroke="#67A74B" strokeWidth="3" strokeDasharray="3 3" />
            <CheckCircle2 className="text-sdggreen" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-12" aria-labelledby="handwashing-heading">
      <div className="max-w-3xl mb-8">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
          WHO Standard Protocol
        </span>
        <h2
          id="handwashing-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
        >
          Handwashing in 6 Steps (20–30 Seconds)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Washing hands with soap and clean water removes 99% of surface bacteria and viruses. Follow the verified WHO 6-step technique:
        </p>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between max-w-xl mx-auto mb-8 relative">
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 dark:bg-navy-800 -translate-y-1/2 z-0" />
        {/* Active progress track */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-teal transition-all duration-300 -translate-y-1/2 z-0"
          style={{
            width: `${(currentStepIndex / (HANDWASHING_STEPS.length - 1)) * 100}%`,
          }}
        />

        {HANDWASHING_STEPS.map((s, idx) => {
          const isActive = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setCurrentStepIndex(idx)}
              aria-label={`Go to step ${s.step}: ${s.title}`}
              aria-current={isActive ? "step" : undefined}
              className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full font-heading font-bold text-xs sm:text-sm flex items-center justify-center transition-all ${
                isActive
                  ? "bg-teal text-white ring-4 ring-teal/20 scale-110 shadow-md"
                  : isCompleted
                  ? "bg-sdggreen text-white shadow-sm"
                  : "bg-white dark:bg-navy-800 text-slate-400 border-2 border-slate-200 dark:border-navy-700 hover:border-teal"
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : s.step}
            </button>
          );
        })}
      </div>

      {/* Main Step Display Card */}
      <div className="max-w-2xl mx-auto rounded-2xl bg-aqua/40 dark:bg-navy-800/80 p-6 sm:p-8 border border-teal/20 dark:border-teal/10 flex flex-col items-center text-center">
        {/* Illustration */}
        <div className="mb-4">{renderStepSvg(step.svgType)}</div>

        {/* Step Badge & Duration */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal text-white">
            Step {step.step} of 6
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300">
            {step.duration}
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-2">
          {step.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mb-8 leading-relaxed">
          {step.instruction}
        </p>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirst}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-navy-600 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-navy-700 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {!isLast ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal hover:bg-teal-600 shadow-sm transition-all"
            >
              <span>Next step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRestart}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-sdggreen hover:bg-sdggreen-600 shadow-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
