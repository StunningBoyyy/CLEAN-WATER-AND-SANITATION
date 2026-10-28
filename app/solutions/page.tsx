import type { Metadata } from "next";
import { SolutionsTabs } from "@/components/solutions/SolutionsTabs";
import { HandwashingStepper } from "@/components/solutions/HandwashingStepper";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Everyday Habits & Sustainable Practices",
  description:
    "Discover practical solutions for clean water and safe sanitation: household habits, community initiatives, technology and policy, and a 6-step interactive handwashing guide.",
};

export default function SolutionsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
            Action Framework
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white mt-1 mb-4">
            Practical Solutions for Every Scale
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Clean water solutions are not limited to massive engineering projects. Every household habit and community initiative creates compounding benefits.
          </p>
        </div>

        {/* 3-Tab Solutions Panel */}
        <SolutionsTabs />

        {/* Interactive Handwashing Stepper */}
        <HandwashingStepper />

        {/* Call to Action to Take Action page */}
        <div className="rounded-3xl bg-gradient-to-r from-water/10 via-teal/10 to-sdggreen/10 dark:from-water/20 dark:via-teal/20 dark:to-sdggreen/20 p-8 sm:p-12 border border-water/20 text-center my-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-800 text-teal dark:text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Knowledge Into Impact</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-3">
            Ready to calculate your footprint and make a pledge?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            Test your knowledge with our Myth vs Fact quiz and track your personal water conservation metrics.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md hover:shadow-water transition-all"
          >
            <span>Go to Take Action</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
