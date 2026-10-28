"use client";

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { WATER_COVERAGE_TIMELINE, OFFICIAL_SOURCE } from "@/data/facts";
import { TrendingUp } from "lucide-react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string | number;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy text-white text-xs p-3 rounded-xl shadow-lg border border-navy-700">
        <p className="font-semibold text-water-300">Year {label}</p>
        <p className="text-sm font-bold mt-0.5">
          {payload[0].value}% Safely Managed
        </p>
        <p className="text-[10px] text-slate-300 mt-1">WHO/UNICEF JMP Metric</p>
      </div>
    );
  }
  return null;
};

export function CoverageChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-10 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-water dark:text-water-400 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Progress Tracking (2015–2024)</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mt-1">
            Global Safely Managed Drinking Water Coverage
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Global coverage expanded from 68% in 2015 to 74% in 2024 (+961 million people gained access).
          </p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">Total Gain</span>
            <p className="font-heading font-bold text-base sm:text-lg text-sdggreen">
              +6.0% Points
            </p>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-navy-700" />
          <div className="text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">Current Coverage</span>
            <p className="font-heading font-bold text-base sm:text-lg text-water">
              74.0%
            </p>
          </div>
        </div>
      </div>

      <div className="h-72 sm:h-80 w-full pt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={WATER_COVERAGE_TIMELINE}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="coverageGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2A88CF" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2A88CF" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E2E8F0"
                className="dark:stroke-navy-800"
              />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={{ stroke: "#CBD5E1" }}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <YAxis
                domain={[60, 80]}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}%`}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="coverage"
                stroke="#2A88CF"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#coverageGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-navy-800 rounded-xl">
            <span className="text-xs text-slate-400">Loading chart...</span>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 text-center md:text-left">
        {OFFICIAL_SOURCE.citation} Data represents global household drinking water coverage up to 2024.
      </p>
    </section>
  );
}
