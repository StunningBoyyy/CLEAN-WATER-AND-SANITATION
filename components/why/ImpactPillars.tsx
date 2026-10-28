import React from "react";
import Link from "next/link";
import { HeartPulse, GraduationCap, ShieldCheck, Users2, ArrowRight } from "lucide-react";

export function ImpactPillars() {
  const pillars = [
    {
      title: "Health & Well-being",
      subtitle: "Preventing Illness & Saving Lives",
      description:
        "Contaminated water transmits deadly diseases like cholera, dysentery, hepatitis A, and typhoid. Proper sanitation and handwashing with soap cut preventable childhood diarrhoea by up to 40%.",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      actionLink: "/solutions",
      actionText: "See hygiene solutions",
      badgeColor: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
      borderAccent: "border-t-4 border-t-rose-500",
    },
    {
      title: "Education & Opportunity",
      subtitle: "Keeping Children in Class",
      description:
        "When schools lack clean toilets and private sanitation, attendance drops sharply—especially for adolescent girls. Reliable WASH facilities at school ensure children stay enrolled and learn safely.",
      icon: <GraduationCap className="w-8 h-8 text-water" />,
      actionLink: "/solutions",
      actionText: "School WASH initiatives",
      badgeColor: "bg-water/10 text-water dark:bg-water/20 dark:text-water-300",
      borderAccent: "border-t-4 border-t-water",
    },
    {
      title: "Safety & Human Dignity",
      subtitle: "Protecting Vulnerable Individuals",
      description:
        "Without a private toilet at home, women and girls often walk long distances in the dark to find secluded areas, facing harassment and assault. Safe household sanitation protects dignity, privacy, and personal safety.",
      icon: <ShieldCheck className="w-8 h-8 text-teal" />,
      actionLink: "/take-action",
      actionText: "Support safe sanitation",
      badgeColor: "bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-300",
      borderAccent: "border-t-4 border-t-teal",
    },
    {
      title: "Community & Economy",
      subtitle: "Breaking the Poverty Trap",
      description:
        "Billions of productive hours are lost every year walking to collect water and caring for sick family members. Safe local taps free up time for work, small businesses, and community growth.",
      icon: <Users2 className="w-8 h-8 text-sdggreen" />,
      actionLink: "/take-action",
      actionText: "Make a community pledge",
      badgeColor: "bg-sdggreen/10 text-sdggreen dark:bg-sdggreen/20 dark:text-sdggreen-300",
      borderAccent: "border-t-4 border-t-sdggreen",
    },
  ];

  return (
    <section className="py-12" aria-labelledby="pillars-heading">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
          Core Dimensions
        </span>
        <h2
          id="pillars-heading"
          className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-1 mb-3"
        >
          Four Pillars of Human Impact
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Water is not just an environmental issue. It directly shapes health, education, equity, and economic freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className={`rounded-2xl bg-white dark:bg-navy-800 p-8 shadow-sm border border-slate-200/80 dark:border-navy-700/80 ${pillar.borderAccent} flex flex-col justify-between transition-all duration-300 hover:shadow-water hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${pillar.badgeColor}`}
                >
                  SDG 6 Indicator
                </span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                {pillar.subtitle}
              </span>
              <h3 className="font-heading text-2xl font-bold text-navy dark:text-white mt-1 mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            <Link
              href={pillar.actionLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-white hover:text-water dark:hover:text-water-300 transition-colors pt-4 border-t border-slate-100 dark:border-navy-700 group"
            >
              <span>{pillar.actionText}</span>
              <ArrowRight className="w-4 h-4 text-water group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
