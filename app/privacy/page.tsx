import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Database, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Clean Water & Sanitation",
  description:
    "We respect your privacy. No tracking cookies or commercial ad trackers are used on this educational platform.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-water hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400 block">
            Transparency Notice
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-1 mb-3">
            Privacy & Data Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Last updated: August 2025 • Clean Water & Sanitation Project
          </p>
        </div>

        <div className="rounded-3xl bg-white dark:bg-navy-900 p-8 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-navy dark:text-white">
              <Lock className="w-5 h-5 text-water" />
              <h2 className="font-heading font-bold text-lg sm:text-xl">
                1. Fundamental Principle: Zero Commercial Tracking
              </h2>
            </div>
            <p>
              The Clean Water & Sanitation platform is a non-commercial educational initiative founded by Vishwa Vijay and Prateek Saroj. We do not sell data, run advertisements, or utilize third-party ad tracking scripts.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-navy dark:text-white">
              <Database className="w-5 h-5 text-teal" />
              <h2 className="font-heading font-bold text-lg sm:text-xl">
                2. Local Storage & Client-Side Preferences
              </h2>
            </div>
            <p>
              Interactive features like your <strong>Theme Selection (Light/Dark mode)</strong> and your <strong>Pledge Board Checkbox items</strong> are stored exclusively in your browser&apos;s local storage (<code>localStorage</code>). This data stays entirely on your local device and is never uploaded, tracked, or aggregated on any remote server. You can reset it anytime by clearing your browser cache.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-navy dark:text-white">
              <ShieldCheck className="w-5 h-5 text-sdggreen" />
              <h2 className="font-heading font-bold text-lg sm:text-xl">
                3. Contact Form Submissions
              </h2>
            </div>
            <p>
              The only personal information collected is what you voluntarily submit via our Contact Form (your name, email address, and message). This information is transmitted securely over HTTPS directly to our Next.js API route solely to respond to your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-navy dark:text-white">
              4. External Links
            </h2>
            <p>
              Our website provides educational links to the WHO/UNICEF Joint Monitoring Programme (JMP) and United Nations publications. We are not responsible for the privacy practices or contents of external third-party sites.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 dark:border-navy-800 text-xs text-slate-500 dark:text-slate-400">
            For questions regarding our privacy practices, contact us via the form on our{" "}
            <Link href="/take-action" className="text-water hover:underline">
              Take Action page
            </Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
