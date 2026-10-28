import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AnimatedCounters } from "@/components/home/AnimatedCounters";
import { JourneyCards } from "@/components/home/JourneyCards";
import { MissionStrip } from "@/components/home/MissionStrip";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedCounters />
      <WaveDivider fillColor="#FFFFFF" className="text-white dark:text-navy-900" />
      <MissionStrip />
      <JourneyCards />
    </>
  );
}
