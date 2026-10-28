import type { Metadata } from "next";
import { DefinitionDiagram } from "@/components/issue/DefinitionDiagram";
import { CoverageChart } from "@/components/issue/CoverageChart";
import { FactCardGrid } from "@/components/issue/FactCardGrid";
import { VulnerableGroups } from "@/components/issue/VulnerableGroups";
import { SourcesSection } from "@/components/issue/SourcesSection";

export const metadata: Metadata = {
  title: "The Issue | Global Water & Sanitation Crisis",
  description:
    "Explore what safely managed drinking water and sanitation mean, view global coverage progress from 2015 to 2024, and examine verified WHO/UNICEF JMP statistics.",
};

export default function TheIssuePage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
            Awareness & Facts
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white mt-1 mb-4">
            The Global Water Crisis
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Clean water and safe sanitation are essential to life, yet 1 in 4 people on Earth still lack safe drinking water at home. Explore the verified evidence and definitions below.
          </p>
        </div>

        {/* 3-Step Definition Diagram */}
        <DefinitionDiagram />

        {/* Recharts Coverage Timeline */}
        <CoverageChart />

        {/* 8 Fact Cards */}
        <FactCardGrid />

        {/* Who is Affected Most */}
        <VulnerableGroups />

        {/* Official Sources Citation */}
        <SourcesSection />
      </div>
    </div>
  );
}
