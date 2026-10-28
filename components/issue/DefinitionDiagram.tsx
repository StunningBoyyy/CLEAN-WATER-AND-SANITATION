import React from "react";
import { Check, Droplet, ShieldCheck, Home, Clock, Sparkles } from "lucide-react";
import { DEFINITIONS } from "@/data/facts";

export function DefinitionDiagram() {
  const stepIcons = [
    <Home key="1" className="w-5 h-5 text-water" />,
    <Clock key="2" className="w-5 h-5 text-water" />,
    <Sparkles key="3" className="w-5 h-5 text-water" />,
  ];

  const sanStepIcons = [
    <ShieldCheck key="1" className="w-5 h-5 text-teal" />,
    <Check key="2" className="w-5 h-5 text-teal" />,
    <Sparkles key="3" className="w-5 h-5 text-teal" />,
  ];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8">
      <div className="max-w-3xl mb-10">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
          Global Public Health Standard
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-3">
          What does &ldquo;Safely Managed&rdquo; mean?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          The United Nations Joint Monitoring Programme (JMP) classifies water and sanitation through strict criteria. Having water nearby or a basic pit toilet is not enough.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Drinking Water Definition */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-navy-800">
            <div className="w-10 h-10 rounded-xl bg-water/10 dark:bg-water/20 flex items-center justify-center text-water">
              <Droplet className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-navy dark:text-white">
                {DEFINITIONS.drinkingWater.term}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                SDG Target 6.1 Indicator
              </p>
            </div>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-water/30">
            {DEFINITIONS.drinkingWater.steps.map((step, idx) => (
              <div key={step.title} className="relative flex items-start gap-4">
                <div className="absolute -left-6 mt-0.5 w-6 h-6 rounded-full bg-water text-white flex items-center justify-center text-xs font-bold ring-4 ring-white dark:ring-navy-900">
                  {step.step}
                </div>
                <div className="bg-aqua/40 dark:bg-navy-800/80 p-4 rounded-xl border border-water/20 dark:border-water/10 w-full">
                  <div className="flex items-center gap-2 mb-1">
                    {stepIcons[idx]}
                    <h4 className="font-heading font-bold text-sm text-navy dark:text-white">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sanitation Definition */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-navy-800">
            <div className="w-10 h-10 rounded-xl bg-teal/10 dark:bg-teal/20 flex items-center justify-center text-teal">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-navy dark:text-white">
                {DEFINITIONS.sanitation.term}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                SDG Target 6.2 Indicator
              </p>
            </div>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-teal/30">
            {DEFINITIONS.sanitation.steps.map((step, idx) => (
              <div key={step.title} className="relative flex items-start gap-4">
                <div className="absolute -left-6 mt-0.5 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold ring-4 ring-white dark:ring-navy-900">
                  {step.step}
                </div>
                <div className="bg-teal-50/40 dark:bg-navy-800/80 p-4 rounded-xl border border-teal/20 dark:border-teal/10 w-full">
                  <div className="flex items-center gap-2 mb-1">
                    {sanStepIcons[idx]}
                    <h4 className="font-heading font-bold text-sm text-navy dark:text-white">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
