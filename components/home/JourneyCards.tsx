import React from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Lightbulb, HandHeart } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function JourneyCards() {
  const journeys = [
    {
      title: "1. The Global Issue",
      subtitle: "Understand the Reality",
      description:
        "Explore what 'safely managed' water and sanitation really mean, view 2015–2024 global trends, and see why inequalities persist across rural and fragile communities.",
      href: "/the-issue",
      accent: "water" as const,
      icon: <AlertTriangle className="w-6 h-6 text-water" />,
      ctaText: "Explore the data",
      badge: "Awareness",
      badgeColor: "bg-water/10 text-water dark:bg-water/20 dark:text-water-300",
    },
    {
      title: "2. Actionable Solutions",
      subtitle: "Learn Practical Methods",
      description:
        "From household leak prevention and proper 6-step handwashing to community watershed protection and scalable sanitation technology.",
      href: "/solutions",
      accent: "teal" as const,
      icon: <Lightbulb className="w-6 h-6 text-teal" />,
      ctaText: "Discover solutions",
      badge: "Understanding",
      badgeColor: "bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-300",
    },
    {
      title: "3. Take Meaningful Action",
      subtitle: "Commit & Measure Impact",
      description:
        "Calculate your personal water footprint, test your knowledge in the Myth vs Fact quiz, sign the community pledge board, and join the movement.",
      href: "/take-action",
      accent: "green" as const,
      icon: <HandHeart className="w-6 h-6 text-sdggreen" />,
      ctaText: "Take action now",
      badge: "Action",
      badgeColor: "bg-sdggreen/10 text-sdggreen dark:bg-sdggreen/20 dark:text-sdggreen-300",
    },
  ];

  return (
    <section className="py-16 md:py-24" aria-labelledby="journey-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
            A Clear Path Forward
          </span>
          <h2
            id="journey-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-2 mb-4"
          >
            From Awareness to Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Solving the global water crisis requires informed people who understand the challenge and take everyday responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeys.map((journey) => (
            <Card
              key={journey.title}
              accent={journey.accent}
              hoverable
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                    {journey.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${journey.badgeColor}`}
                  >
                    {journey.badge}
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {journey.subtitle}
                </span>
                <h3 className="font-heading text-xl font-bold text-navy dark:text-white mt-1 mb-3">
                  {journey.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {journey.description}
                </p>
              </div>

              <Link
                href={journey.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-white hover:text-water dark:hover:text-water-300 transition-colors group mt-2 pt-4 border-t border-slate-100 dark:border-navy-700"
              >
                <span>{journey.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-water" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
