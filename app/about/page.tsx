import type { Metadata } from "next";
import Link from "next/link";
import { Droplet, Award, Users, Compass, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Founders & Mission - SDG 6 Project",
  description:
    "Founded by Vishwa Vijay and Prateek Saroj. Dedicated to UN Sustainable Development Goal 6 (Clean Water and Sanitation) through design, user research, and accessible web engineering.",
  authors: [{ name: "Vishwa Vijay" }, { name: "Prateek Saroj" }],
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clean Water & Sanitation Project",
    url: "https://cleanwater-sdg6.org",
    logo: "https://cleanwater-sdg6.org/icon.svg",
    description:
      "A public-interest educational platform dedicated to UN Sustainable Development Goal 6 (Clean Water and Sanitation).",
    founder: [
      {
        "@type": "Person",
        name: "Vishwa Vijay",
        jobTitle: "Founder",
      },
      {
        "@type": "Person",
        name: "Prateek Saroj",
        jobTitle: "Founder",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
              Our Story & Leadership
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy dark:text-white mt-1 mb-4">
              About the Initiative
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded by Vishwa Vijay and Prateek Saroj to translate vital United Nations Sustainable Development Goal 6 research into interactive, accessible, and actionable digital experiences.
            </p>
          </div>

          {/* Mission & Vision Section (2-3 paragraphs) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
            <div className="rounded-3xl bg-white dark:bg-navy-900 p-8 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-water/10 dark:bg-water/20 text-water flex items-center justify-center mb-2">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">
                Our Mission & Vision
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Access to clean drinking water and safely managed sanitation is a fundamental human right recognized by the United Nations General Assembly. Despite significant global strides, more than 2 billion people continue to live without reliable access to safe water at home. Our mission is to bridge the knowledge gap between complex scientific monitoring reports and everyday citizens.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe that awareness is the catalyst for meaningful civic participation. By pairing verified empirical data with interactive calculations and step-by-step hygiene practices, we empower students, families, and community leaders to advocate for equitable infrastructure and conserve freshwater resources in their daily routines.
              </p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-navy-900 p-8 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal/10 dark:bg-teal/20 text-teal flex items-center justify-center mb-2">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white">
                Project Focus & Disciplines
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                This project was developed at the intersection of three foundational disciplines:
              </p>
              <ul className="space-y-3 pt-2 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-water/10 text-water flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <span><strong>Design:</strong> Human-centered UI system prioritizing visual clarity, aquatic calming aesthetics, and WCAG 2.1 AA accessibility.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <span><strong>User Research:</strong> Understanding user mental models to transition visitors smoothly from awareness to action without cognitive overload.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-sdggreen/10 text-sdggreen flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <span><strong>Web Engineering:</strong> High-performance Next.js 15 App Router architecture with strict TypeScript, zero console warnings, and responsive fidelity.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Founders Section (Prominently displayed) */}
          <div className="my-16" aria-labelledby="founders-heading">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
                Project Leadership
              </span>
              <h2
                id="founders-heading"
                className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-1 mb-2"
              >
                Founded by Vishwa Vijay and Prateek Saroj
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Co-founders dedicated to public health education, design thinking, and sustainable technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Founder 1: Vishwa Vijay */}
              <div className="rounded-3xl bg-white dark:bg-navy-900 p-8 border border-slate-200/80 dark:border-navy-800 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-water hover:-translate-y-1">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-water-600 to-water-400 text-white font-heading font-bold text-2xl flex items-center justify-center shadow-md mb-4 ring-4 ring-water/10">
                  VV
                </div>
                <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-1">
                  Vishwa Vijay
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-water/10 text-water dark:bg-water/20 dark:text-water-300 mb-4">
                  Founder
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Co-founder, Clean Water & Sanitation project.
                </p>
                <p className="text-xs text-slate-400">
                  Focus: Design + User Research + Web
                </p>
              </div>

              {/* Founder 2: Prateek Saroj */}
              <div className="rounded-3xl bg-white dark:bg-navy-900 p-8 border border-slate-200/80 dark:border-navy-800 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-water hover:-translate-y-1">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 text-white font-heading font-bold text-2xl flex items-center justify-center shadow-md mb-4 ring-4 ring-teal/10">
                  PS
                </div>
                <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-1">
                  Prateek Saroj
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-300 mb-4">
                  Founder
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Co-founder, Clean Water & Sanitation project.
                </p>
                <p className="text-xs text-slate-400">
                  Focus: Design + User Research + Web
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="rounded-3xl bg-aqua/50 dark:bg-navy-800 p-8 sm:p-10 border border-slate-200 dark:border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-6 my-10">
            <div>
              <h3 className="font-heading font-bold text-xl text-navy dark:text-white">
                Join our ongoing awareness campaign
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Calculate your personal water footprint or sign our community pledge.
              </p>
            </div>
            <Link
              href="/take-action"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md transition-all flex-shrink-0"
            >
              <span>Explore Interactive Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
