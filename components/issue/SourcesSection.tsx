import React from "react";
import { BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import { OFFICIAL_SOURCE } from "@/data/facts";

export function SourcesSection() {
  return (
    <section className="py-12 bg-panel/40 dark:bg-navy-900/60 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 my-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-water/10 dark:bg-water/20 text-water flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy dark:text-white">
            Data Sources & Verification
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Commitment to academic integrity and zero fabricated statistics.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
        <p className="leading-relaxed">
          Every numerical figure, coverage estimate, and public-health indicator featured across this platform is sourced directly from the official publications of the World Health Organization (WHO) and the United Nations Children&apos;s Fund (UNICEF):
        </p>

        <div className="p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sdggreen flex-shrink-0" />
              <span className="font-semibold text-navy dark:text-white">
                {OFFICIAL_SOURCE.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {OFFICIAL_SOURCE.reportTitle} ({OFFICIAL_SOURCE.publishedDate})
            </p>
          </div>
          <a
            href={OFFICIAL_SOURCE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-water/10 hover:bg-water/20 text-water dark:text-water-300 transition-colors self-start sm:self-auto"
          >
            <span>View Primary Source Report</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Disclaimer: This educational website is an independent initiative designed and developed by Vishwa Vijay and Prateek Saroj. The WHO and UNICEF are credited exclusively as original data publishers.
        </p>
      </div>
    </section>
  );
}
