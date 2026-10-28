import type { Metadata } from "next";
import { PledgeBoard } from "@/components/action/PledgeBoard";
import { FootprintCalc } from "@/components/action/FootprintCalc";
import { Quiz } from "@/components/action/Quiz";
import { ContactForm } from "@/components/action/ContactForm";
import { ShareButtons } from "@/components/action/ShareButtons";

export const metadata: Metadata = {
  title: "Take Action | Water Footprint & Community Pledge",
  description:
    "Calculate your personal water footprint, test your knowledge in the Myth vs Fact quiz, sign the community pledge board, and get involved.",
};

export default function TakeActionPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Share Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sdggreen">
              Direct Impact
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white mt-1 mb-3">
              Take Action for SDG 6
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every drop saved and every hygiene standard adopted transforms public health. Use our interactive tools to quantify your footprint and commit to daily change.
            </p>
          </div>

          <ShareButtons />
        </div>

        {/* 1. Pledge Board */}
        <PledgeBoard />

        {/* 2. Water Footprint Calculator */}
        <FootprintCalc />

        {/* 3. Myth vs Fact Quiz */}
        <Quiz />

        {/* 4. Contact / Join Form */}
        <ContactForm />
      </div>
    </div>
  );
}
