"use client";

import React, { useState, useEffect } from "react";
import { CheckSquare, Square, Share2, Sparkles, Check, Copy } from "lucide-react";
import { PLEDGE_ITEMS } from "@/data/actions";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { Toast } from "@/components/ui/Toast";

const STORAGE_KEY = "clean_water_pledges_v1";

export function PledgeBoard() {
  const [selectedPledges, setSelectedPledges] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedPledges(parsed);
        }
      }
    } catch {
      // In-memory fallback if localStorage fails or is blocked
      setSelectedPledges([]);
    }
  }, []);

  const togglePledge = (id: string) => {
    const next = selectedPledges.includes(id)
      ? selectedPledges.filter((item) => item !== id)
      : [...selectedPledges, id];

    setSelectedPledges(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // silently fallback
    }
  };

  const totalCount = PLEDGE_ITEMS.length;
  const completedCount = selectedPledges.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  // Calculate impact score: estimated daily liters conserved
  const dailyLitersSaved = PLEDGE_ITEMS.reduce((sum, item) => {
    return selectedPledges.includes(item.id) ? sum + item.estimatedDailyLitersSaved : sum;
  }, 0);

  const annualLitersSaved = Math.round(dailyLitersSaved * 365);

  const handleSharePledge = async () => {
    const text = `I just committed to ${completedCount} action${
      completedCount === 1 ? "" : "s"
    } on the Clean Water & Sanitation (SDG 6) Pledge Board! Saving an estimated ${dailyLitersSaved} L of water every day. Join me:`;
    const url = typeof window !== "undefined" ? window.location.href : "https://cleanwater-sdg6.org";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Clean Water & Sanitation Pledge",
          text,
          url,
        });
        setToastMessage("Pledge shared successfully!");
        return;
      } catch {
        // user cancelled or fallback
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setToastMessage("Pledge commitment copied to clipboard!");
    } catch {
      setToastMessage("Could not copy to clipboard.");
    }
  };

  return (
    <section className="py-10 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8" aria-labelledby="pledge-heading">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-navy-800">
        <div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sdggreen">
            Community Commitment
          </span>
          <h2
            id="pledge-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
          >
            Clean Water Pledge Board
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Choose your daily conservation and hygiene commitments. Your progress saves automatically to this device.
          </p>
        </div>

        {/* Progress summary & Share CTA */}
        <div className="flex items-center gap-6 self-start lg:self-auto">
          <ProgressRing
            progress={isMounted ? progressPercent : 0}
            size={90}
            strokeWidth={8}
            color="green"
            label={`${completedCount}/${totalCount}`}
          />

          <div className="space-y-1.5">
            <span className="text-xs text-slate-500 dark:text-slate-400">Impact Score</span>
            <div className="font-heading text-xl sm:text-2xl font-bold text-sdggreen">
              {isMounted ? `${dailyLitersSaved} L / day` : "0 L / day"}
            </div>
            <p className="text-[11px] text-slate-400">
              ~{isMounted ? annualLitersSaved.toLocaleString() : "0"} L saved/year
            </p>
          </div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        {PLEDGE_ITEMS.map((item) => {
          const isChecked = isMounted && selectedPledges.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              role="checkbox"
              aria-checked={isChecked}
              onClick={() => togglePledge(item.id)}
              className={`flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                isChecked
                  ? "bg-sdggreen/10 dark:bg-sdggreen/20 border-sdggreen/40 text-navy dark:text-white"
                  : "bg-white dark:bg-navy-800 border-slate-200/80 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600"
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isChecked ? (
                  <div className="w-5 h-5 rounded-md bg-sdggreen text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading font-semibold text-sm text-navy dark:text-white">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Share pledge banner */}
      <div className="pt-6 border-t border-slate-100 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center sm:text-left">
          {completedCount === 0
            ? "Check off the commitments above to calculate your personal water savings."
            : `You have selected ${completedCount} of ${totalCount} commitments. Share your pledge to inspire others!`}
        </p>

        <button
          type="button"
          onClick={handleSharePledge}
          disabled={!isMounted || completedCount === 0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sdggreen hover:bg-sdggreen-600 shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all"
        >
          <Share2 className="w-4 h-4" />
          <span>Share Your Pledge</span>
        </button>
      </div>

      <Toast
        isOpen={!!toastMessage}
        message={toastMessage || ""}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
}
