import React from "react";
import { Globe2, ShieldAlert, Trees, HeartPulse, Users } from "lucide-react";
import { VULNERABLE_GROUPS } from "@/data/facts";

export function VulnerableGroups() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-indigo-500" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
      case "Trees":
        return <Trees className="w-6 h-6 text-emerald-500" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-teal" />;
      default:
        return <Users className="w-6 h-6 text-water" />;
    }
  };

  return (
    <section className="py-12" aria-labelledby="vulnerable-heading">
      <div className="mb-8">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-rose-500">
          Disparities & Equity
        </span>
        <h2
          id="vulnerable-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
        >
          Who Is Affected Most?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
          The global water crisis is deeply unequal. Vulnerability is concentrated among specific regions and groups bearing the heaviest burden of inadequate water and sanitation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VULNERABLE_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl bg-white dark:bg-navy-800 p-6 border border-slate-200/80 dark:border-navy-700/80 shadow-sm flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center flex-shrink-0">
              {getIcon(group.iconName)}
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-navy dark:text-white mb-1.5">
                {group.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {group.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
