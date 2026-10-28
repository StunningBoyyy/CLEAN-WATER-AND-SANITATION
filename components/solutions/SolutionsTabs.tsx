"use client";

import React, { useState } from "react";
import {
  Wrench,
  Droplets,
  Sparkles,
  ShieldCheck,
  Trash2,
  Users,
  GraduationCap,
  Shield,
  Megaphone,
  Filter,
  CloudRain,
  Recycle,
  Building2,
} from "lucide-react";
import { SOLUTIONS_TABS, type SolutionItem } from "@/data/actions";

type TabKey = "habits" | "community" | "techPolicy";

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("habits");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return <Wrench className="w-5 h-5 text-water" />;
      case "DropletOff":
      case "Droplets":
        return <Droplets className="w-5 h-5 text-water" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-teal" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-sdggreen" />;
      case "Trash2":
        return <Trash2 className="w-5 h-5 text-amber-500" />;
      case "Users":
        return <Users className="w-5 h-5 text-water" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-teal" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-sdggreen" />;
      case "Megaphone":
        return <Megaphone className="w-5 h-5 text-amber-500" />;
      case "Filter":
        return <Filter className="w-5 h-5 text-water" />;
      case "CloudRain":
        return <CloudRain className="w-5 h-5 text-teal" />;
      case "Recycle":
        return <Recycle className="w-5 h-5 text-sdggreen" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-indigo-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal" />;
    }
  };

  const currentTab = SOLUTIONS_TABS[activeTab];

  return (
    <section className="py-10" aria-labelledby="solutions-tabs-heading">
      <div className="mb-8">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
          Multilevel Action
        </span>
        <h2
          id="solutions-tabs-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
        >
          Comprehensive Solutions Architecture
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Sustainable clean water access demands action across all levels: from individual habits to community organizing and government policy.
        </p>
      </div>

      {/* Accessible Tab List */}
      <div
        role="tablist"
        aria-label="Solutions Categories"
        className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-navy-800/80 max-w-xl mb-8"
      >
        <button
          type="button"
          role="tab"
          id="tab-habits"
          aria-selected={activeTab === "habits"}
          aria-controls="panel-habits"
          onClick={() => setActiveTab("habits")}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "habits"
              ? "bg-white dark:bg-navy-700 text-water shadow-sm"
              : "text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white"
          }`}
        >
          Everyday Habits
        </button>

        <button
          type="button"
          role="tab"
          id="tab-community"
          aria-selected={activeTab === "community"}
          aria-controls="panel-community"
          onClick={() => setActiveTab("community")}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "community"
              ? "bg-white dark:bg-navy-700 text-teal shadow-sm"
              : "text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white"
          }`}
        >
          Community
        </button>

        <button
          type="button"
          role="tab"
          id="tab-techPolicy"
          aria-selected={activeTab === "techPolicy"}
          aria-controls="panel-techPolicy"
          onClick={() => setActiveTab("techPolicy")}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "techPolicy"
              ? "bg-white dark:bg-navy-700 text-sdggreen shadow-sm"
              : "text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white"
          }`}
        >
          Technology & Policy
        </button>
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="space-y-6 animate-in fade-in-50 duration-200"
      >
        <div className="p-4 rounded-xl bg-water/5 dark:bg-water/10 border border-water/20 text-sm text-slate-700 dark:text-slate-200">
          <p className="font-medium">{currentTab.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTab.items.map((item: SolutionItem) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-navy-800 p-6 border border-slate-200/80 dark:border-navy-700/80 shadow-sm flex flex-col justify-between hover:shadow-water transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300">
                    {item.difficulty}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-navy dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-navy-700 flex items-center justify-between text-xs font-semibold text-water dark:text-water-400">
                <span>Direct Impact:</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
