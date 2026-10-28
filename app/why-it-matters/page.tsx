import type { Metadata } from "next";
import { ImpactPillars } from "@/components/why/ImpactPillars";
import { CauseEffectFlow } from "@/components/why/CauseEffectFlow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why It Matters | Health, Education & Human Dignity",
  description:
    "Explore why clean water and safe sanitation are vital for human health, school attendance, safety, dignity, and breaking the cycle of poverty.",
};

export default function WhyItMattersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
            Real-World Impact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white mt-1 mb-4">
            Why Clean Water & Sanitation Matters
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Safe water is the foundation of every thriving community. When people have reliable water and hygienic toilets, health improves, children stay in school, and entire local economies flourish.
          </p>
        </div>

        {/* 4 Impact Pillars */}
        <ImpactPillars />

        {/* Cause -> Effect Flow */}
        <CauseEffectFlow />

        {/* Bottom CTA */}
        <div className="text-center py-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-3">
            Ready to discover what we can do?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            Explore practical steps for everyday households, community organizers, and civic policy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-water hover:bg-water-600 transition-all shadow-md hover:shadow-water"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/take-action"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-navy dark:text-white bg-white dark:bg-navy-800 hover:bg-slate-50 border border-slate-200 dark:border-navy-700 transition-all"
            >
              <span>Take the Pledge</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
