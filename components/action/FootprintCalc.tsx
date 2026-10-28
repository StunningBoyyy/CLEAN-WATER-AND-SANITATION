"use client";

import React, { useState } from "react";
import {
  Droplets,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  TrendingDown,
  Bath,
  Utensils,
  Shirt,
} from "lucide-react";
import {
  calculateFootprint,
  FOOTPRINT_NOTE,
  INPUT_LIMITS,
  CONSUMPTION_CONSTANTS,
  type FootprintInputs,
} from "@/data/footprint";

export function FootprintCalc() {
  const [inputs, setInputs] = useState<FootprintInputs>({
    showerMinutes: INPUT_LIMITS.showerMinutes.default,
    toiletFlushes: INPUT_LIMITS.toiletFlushes.default,
    tapRunningBrushing: true,
    laundryLoadsPerWeek: INPUT_LIMITS.laundryLoadsPerWeek.default,
    dishwashingMethod: "running-tap",
    cookingDrinkingLiters: INPUT_LIMITS.cookingDrinkingLiters.default,
  });

  const handleInputChange = (field: keyof FootprintInputs, value: unknown) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setInputs({
      showerMinutes: INPUT_LIMITS.showerMinutes.default,
      toiletFlushes: INPUT_LIMITS.toiletFlushes.default,
      tapRunningBrushing: false,
      laundryLoadsPerWeek: INPUT_LIMITS.laundryLoadsPerWeek.default,
      dishwashingMethod: "basin",
      cookingDrinkingLiters: INPUT_LIMITS.cookingDrinkingLiters.default,
    });
  };

  const result = calculateFootprint(inputs);

  // Status badges & colors
  const statusColors = {
    Efficient: "bg-sdggreen/10 text-sdggreen dark:bg-sdggreen/20 dark:text-sdggreen-300",
    Moderate: "bg-water/10 text-water dark:bg-water/20 dark:text-water-300",
    High: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
  };

  return (
    <section className="py-10 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8" aria-labelledby="calculator-heading">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
            Interactive Assessment
          </span>
          <h2
            id="calculator-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
          >
            Personal Water Footprint Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Estimate your direct daily water usage based on everyday fixtures and habits.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Shower minutes */}
          <div className="p-4 rounded-2xl bg-aqua/30 dark:bg-navy-800/60 border border-slate-200/60 dark:border-navy-700/60">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="shower-minutes" className="font-heading font-semibold text-sm text-navy dark:text-white flex items-center gap-2">
                <Bath className="w-4 h-4 text-water" />
                <span>Shower duration per day (minutes)</span>
              </label>
              <span className="font-bold text-water text-sm font-mono">
                {inputs.showerMinutes} min ({inputs.showerMinutes * 9} L)
              </span>
            </div>
            <input
              id="shower-minutes"
              type="range"
              min={INPUT_LIMITS.showerMinutes.min}
              max={INPUT_LIMITS.showerMinutes.max}
              value={inputs.showerMinutes}
              onChange={(e) => handleInputChange("showerMinutes", Number(e.target.value))}
              className="w-full accent-water h-2 bg-slate-200 dark:bg-navy-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0 min</span>
              <span>30 min</span>
              <span>60 min</span>
            </div>
          </div>

          {/* Toilet flushes */}
          <div className="p-4 rounded-2xl bg-aqua/30 dark:bg-navy-800/60 border border-slate-200/60 dark:border-navy-700/60">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="toilet-flushes" className="font-heading font-semibold text-sm text-navy dark:text-white flex items-center gap-2">
                <Droplets className="w-4 h-4 text-teal" />
                <span>Toilet flushes per day</span>
              </label>
              <span className="font-bold text-teal text-sm font-mono">
                {inputs.toiletFlushes} flushes ({inputs.toiletFlushes * 6} L)
              </span>
            </div>
            <input
              id="toilet-flushes"
              type="range"
              min={INPUT_LIMITS.toiletFlushes.min}
              max={INPUT_LIMITS.toiletFlushes.max}
              value={inputs.toiletFlushes}
              onChange={(e) => handleInputChange("toiletFlushes", Number(e.target.value))}
              className="w-full accent-teal h-2 bg-slate-200 dark:bg-navy-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0</span>
              <span>12</span>
              <span>25</span>
            </div>
          </div>

          {/* Tap while brushing */}
          <div className="p-4 rounded-2xl bg-aqua/30 dark:bg-navy-800/60 border border-slate-200/60 dark:border-navy-700/60">
            <span className="font-heading font-semibold text-sm text-navy dark:text-white block mb-2">
              Tap while brushing teeth & shaving
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleInputChange("tapRunningBrushing", false)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  !inputs.tapRunningBrushing
                    ? "bg-sdggreen text-white border-sdggreen shadow-sm"
                    : "bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-navy-600"
                }`}
              >
                Turned Off (~1 L)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange("tapRunningBrushing", true)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  inputs.tapRunningBrushing
                    ? "bg-water text-white border-water shadow-sm"
                    : "bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-navy-600"
                }`}
              >
                Left Running (~12 L)
              </button>
            </div>
          </div>

          {/* Laundry Loads */}
          <div className="p-4 rounded-2xl bg-aqua/30 dark:bg-navy-800/60 border border-slate-200/60 dark:border-navy-700/60">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="laundry-loads" className="font-heading font-semibold text-sm text-navy dark:text-white flex items-center gap-2">
                <Shirt className="w-4 h-4 text-water" />
                <span>Laundry loads per week</span>
              </label>
              <span className="font-bold text-water text-sm font-mono">
                {inputs.laundryLoadsPerWeek} loads ({inputs.laundryLoadsPerWeek * 50} L/wk)
              </span>
            </div>
            <input
              id="laundry-loads"
              type="range"
              min={INPUT_LIMITS.laundryLoadsPerWeek.min}
              max={INPUT_LIMITS.laundryLoadsPerWeek.max}
              value={inputs.laundryLoadsPerWeek}
              onChange={(e) => handleInputChange("laundryLoadsPerWeek", Number(e.target.value))}
              className="w-full accent-water h-2 bg-slate-200 dark:bg-navy-700 rounded-lg cursor-pointer"
            />
          </div>

          {/* Dishwashing Method */}
          <div className="p-4 rounded-2xl bg-aqua/30 dark:bg-navy-800/60 border border-slate-200/60 dark:border-navy-700/60">
            <span className="font-heading font-semibold text-sm text-navy dark:text-white block mb-2 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-teal" />
              <span>Dishwashing Method</span>
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "running-tap", label: "Running Tap (~40 L)" },
                { id: "basin", label: "Basin Wash (~16 L)" },
                { id: "dishwasher", label: "Dishwasher (~12 L)" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleInputChange("dishwashingMethod", opt.id)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-semibold border transition-all ${
                    inputs.dishwashingMethod === opt.id
                      ? "bg-water text-white border-water shadow-sm"
                      : "bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-navy-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-navy-800/90 rounded-2xl p-6 border border-slate-200 dark:border-navy-700 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-navy-700">
            <div>
              <span className="text-xs uppercase font-semibold text-slate-400">
                Calculated Footprint
              </span>
              <div className="font-heading text-4xl font-bold text-navy dark:text-white mt-1">
                {result.dailyLiters} <span className="text-lg font-normal text-water">L / day</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ~{result.weeklyLiters.toLocaleString()} L / week • ~{result.annualLiters.toLocaleString()} L / year
              </p>
            </div>
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                statusColors[result.status]
              }`}
            >
              {result.status} Use
            </span>
          </div>

          {/* Benchmark Comparison Bar */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span>Your Use vs Developed Benchmark (145 L)</span>
              <span className="font-mono text-water font-bold">
                {Math.round(result.comparisonRatio * 100)}%
              </span>
            </div>
            <div className="h-3 w-full bg-slate-200 dark:bg-navy-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  result.status === "Efficient"
                    ? "bg-sdggreen"
                    : result.status === "Moderate"
                    ? "bg-water"
                    : "bg-amber-500"
                }`}
                style={{
                  width: `${Math.min(100, (result.dailyLiters / 200) * 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0 L</span>
              <span>50 L (WHO Basic)</span>
              <span>145 L (Avg)</span>
              <span>200+ L</span>
            </div>
          </div>

          {/* Breakdown Mini List */}
          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <span>Shower:</span>
              <span className="font-mono font-semibold">{result.breakdown.shower} L</span>
            </div>
            <div className="flex justify-between">
              <span>Toilet:</span>
              <span className="font-mono font-semibold">{result.breakdown.toilet} L</span>
            </div>
            <div className="flex justify-between">
              <span>Brushing:</span>
              <span className="font-mono font-semibold">{result.breakdown.brushing} L</span>
            </div>
            <div className="flex justify-between">
              <span>Laundry (daily avg):</span>
              <span className="font-mono font-semibold">{result.breakdown.laundryDaily} L</span>
            </div>
            <div className="flex justify-between">
              <span>Dishes:</span>
              <span className="font-mono font-semibold">{result.breakdown.dishwashing} L</span>
            </div>
          </div>

          {/* 3 Personalized Tips */}
          <div className="pt-4 border-t border-slate-200 dark:border-navy-700 space-y-2.5">
            <span className="font-heading font-semibold text-xs text-navy dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span>3 Tailored Conservation Tips</span>
            </span>
            {result.tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sdggreen flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 italic pt-2">
            <Info className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{FOOTPRINT_NOTE}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
