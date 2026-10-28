"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageSquare } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

export function ShareButtons() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const shareData = {
    title: "Clean Water & Sanitation (UN SDG 6) | Every Drop Matters",
    text: "Discover global water data, calculate your household footprint, and take meaningful action for UN SDG 6.",
    url: typeof window !== "undefined" ? window.location.origin : "https://cleanwater-sdg6.org",
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        setToastMessage("Shared successfully!");
        return;
      } catch {
        // User cancelled or share blocked
      }
    }
    handleCopyLink();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setToastMessage("Link copied to clipboard!");
    } catch {
      setToastMessage("Could not copy link.");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-water hover:bg-water-600 shadow-sm transition-all active:scale-95"
      >
        <Share2 className="w-4 h-4" />
        <span>Share Platform</span>
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-800 hover:bg-slate-100 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-700 shadow-sm transition-all active:scale-95"
      >
        <Copy className="w-4 h-4" />
        <span>Copy Link</span>
      </button>

      <Toast
        isOpen={!!toastMessage}
        message={toastMessage || ""}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
