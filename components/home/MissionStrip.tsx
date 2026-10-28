import React from "react";
import Link from "next/link";
import { ExternalLink, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { OFFICIAL_SOURCE } from "@/data/facts";

export function MissionStrip() {
  return (
    <section className="py-12 bg-white dark:bg-navy-900 border-y border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mission Statement */}
          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal dark:text-teal-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Our Core Mission</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white">
              Democratizing public-health knowledge through visual storytelling.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Too much technical jargon creates apathy. We translate peer-reviewed UN/WHO sanitation research into simple, visual, and actionable steps so that any student, family, or civic leader can make a tangible difference.
            </p>
          </div>

          {/* Quick Pillars & Source */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-water/10 dark:bg-water/20 text-water flex items-center justify-center mx-auto mb-1">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy dark:text-slate-200">100% Free</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 dark:bg-teal/20 text-teal flex items-center justify-center mx-auto mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy dark:text-slate-200">Verified Data</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-sdggreen/10 dark:bg-sdggreen/20 text-sdggreen flex items-center justify-center mx-auto mb-1">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy dark:text-slate-200">Civic Action</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 text-center lg:text-right">
              <span>{OFFICIAL_SOURCE.citation} </span>
              <a
                href={OFFICIAL_SOURCE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-water hover:underline ml-1"
              >
                Access JMP Report <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
