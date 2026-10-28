import React from "react";
import {
  Droplets,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Trees,
  Globe,
  ExternalLink,
} from "lucide-react";
import { VERIFIED_FACTS, type FactItem } from "@/data/facts";

export function FactCardGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplets":
        return <Droplets className="w-5 h-5 text-water" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-teal" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-sdggreen" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "Trees":
        return <Trees className="w-5 h-5 text-emerald-500" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-indigo-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal" />;
    }
  };

  const categoryBadges = {
    "drinking-water": "bg-water/10 text-water dark:bg-water/20 dark:text-water-300",
    sanitation: "bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-300",
    hygiene: "bg-sdggreen/10 text-sdggreen dark:bg-sdggreen/20 dark:text-sdggreen-300",
    inequality: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
  };

  return (
    <section className="py-12" aria-labelledby="facts-heading">
      <div className="mb-8">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
          Peer-Reviewed Public Health Data
        </span>
        <h2
          id="facts-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
        >
          Key Global Findings (WHO/UNICEF JMP 2025)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
          All statistics below are verified from the August 2025 Joint Monitoring Programme (JMP) report reflecting data through 2024.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VERIFIED_FACTS.map((fact: FactItem) => (
          <div
            key={fact.id}
            className="rounded-2xl bg-white dark:bg-navy-800 p-6 border border-slate-200/80 dark:border-navy-700/80 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-water/40 dark:hover:border-water-500/40 hover:shadow-water"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                  {getIcon(fact.iconName)}
                </div>
                <span
                  className={`text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                    categoryBadges[fact.category]
                  }`}
                >
                  {fact.category.replace("-", " ")}
                </span>
              </div>

              <div className="font-heading text-2xl font-bold text-navy dark:text-white mb-1">
                {fact.metric}
              </div>

              <h3 className="font-heading font-semibold text-base text-navy dark:text-slate-100 mb-2">
                {fact.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {fact.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-navy-700 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-400">
              <span>{fact.source} ({fact.year})</span>
              <a
                href={fact.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-water hover:underline inline-flex items-center gap-0.5"
                aria-label={`View source for ${fact.title}`}
              >
                Report <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
