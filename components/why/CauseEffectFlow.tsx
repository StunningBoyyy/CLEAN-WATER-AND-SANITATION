import React from "react";
import { ArrowRight, AlertTriangle, Activity, Briefcase, Repeat } from "lucide-react";

export function CauseEffectFlow() {
  const steps = [
    {
      step: "Step 1",
      title: "Unsafe Water Source",
      description:
        "Families rely on untreated ponds, rivers, or open wells contaminated with sewage, bacteria, and parasites.",
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
      color: "border-amber-400 bg-amber-50/50 dark:bg-amber-950/20",
    },
    {
      step: "Step 2",
      title: "Waterborne Illness",
      description:
        "Children and adults ingest harmful pathogens, causing recurrent diarrhoea, cholera, dehydration, and chronic malnutrition.",
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      color: "border-rose-400 bg-rose-50/50 dark:bg-rose-950/20",
    },
    {
      step: "Step 3",
      title: "Missed School & Work",
      description:
        "Sick children miss critical class days. Parents stay home from work to nurse them or spend hours walking long distances to fetch clean water.",
      icon: <Briefcase className="w-6 h-6 text-water" />,
      color: "border-water bg-water/5 dark:bg-water/10",
    },
    {
      step: "Step 4",
      title: "Poverty Cycle Entrenched",
      description:
        "Lost wages, burdensome medical expenses, and incomplete educations trap families in intergenerational poverty.",
      icon: <Repeat className="w-6 h-6 text-navy dark:text-slate-200" />,
      color: "border-navy dark:border-navy-600 bg-slate-50 dark:bg-navy-800",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8" aria-labelledby="flow-heading">
      <div className="max-w-3xl mb-10">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-rose-500">
          The Vicious Cycle
        </span>
        <h2
          id="flow-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-3"
        >
          How Water Insecurity Traps Communities
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Without clean water and safe sanitation, health issues cascade into economic hardship. Here is the chain of cause and effect:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, idx) => (
          <div key={item.title} className="relative flex flex-col justify-between">
            <div
              className={`rounded-2xl p-6 border-2 ${item.color} flex flex-col h-full`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-700 shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Connecting arrow for larger viewports */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-navy-800 border border-slate-300 dark:border-navy-600 items-center justify-center text-slate-400">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* How to break the cycle callout */}
      <div className="mt-10 p-6 rounded-2xl bg-sdggreen/10 dark:bg-sdggreen/20 border border-sdggreen/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-base text-navy dark:text-white">
            Breaking the cycle is proven and cost-effective.
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Every $1 invested in basic water and sanitation yields an estimated $4 to $5 return in saved medical costs and increased economic productivity.
          </p>
        </div>
        <a
          href="/solutions"
          className="flex-shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-sdggreen hover:bg-sdggreen-600 text-white shadow-sm transition-all"
        >
          Explore Solutions
        </a>
      </div>
    </section>
  );
}
