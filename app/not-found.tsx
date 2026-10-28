import React from "react";
import Link from "next/link";
import { Droplets, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative w-24 h-24 mx-auto rounded-full bg-water/10 dark:bg-water/20 flex items-center justify-center text-water animate-wave-pulse">
          <Droplets className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-water">
            Error 404
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Lost at Sea?
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            The page you are looking for has evaporated or drifted downstream. Let&apos;s guide you back to safety.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/the-issue"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-navy dark:text-white bg-white dark:bg-navy-800 hover:bg-slate-50 border border-slate-200 dark:border-navy-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>The Global Issue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
