import { describe, it, expect } from "vitest";
import {
  calculateFootprint,
  clampInput,
  CONSUMPTION_CONSTANTS,
  INPUT_LIMITS,
} from "@/data/footprint";

describe("Water Footprint Calculation Engine", () => {
  it("clamps inputs within defined boundaries", () => {
    expect(clampInput(10, 0, 60, 8)).toBe(10);
    expect(clampInput(-5, 0, 60, 8)).toBe(0);
    expect(clampInput(100, 0, 60, 8)).toBe(60);
    expect(clampInput(NaN, 0, 60, 8)).toBe(8);
    expect(clampInput(null, 0, 60, 8)).toBe(8);
    expect(clampInput(undefined, 0, 60, 8)).toBe(8);
    expect(clampInput("invalid", 0, 60, 8)).toBe(8);
  });

  it("calculates baseline footprint correctly", () => {
    const result = calculateFootprint({
      showerMinutes: 5, // 5 * 9 = 45 L
      toiletFlushes: 5, // 5 * 6 = 30 L
      tapRunningBrushing: false, // 1 L
      laundryLoadsPerWeek: 2, // (2 * 50) / 7 ≈ 14 L
      dishwashingMethod: "basin", // 16 L
      cookingDrinkingLiters: 5, // 5 L
    });

    // 45 + 30 + 1 + 14 + 16 + 5 = 111 L
    expect(result.dailyLiters).toBe(111);
    expect(result.weeklyLiters).toBe(111 * 7);
    expect(result.annualLiters).toBe(111 * 365);
    expect(result.status).toBe("Moderate");
    expect(result.tips.length).toBe(3);
  });

  it("handles minimum zero values safely without crashing", () => {
    const result = calculateFootprint({
      showerMinutes: 0,
      toiletFlushes: 0,
      tapRunningBrushing: false,
      laundryLoadsPerWeek: 0,
      dishwashingMethod: "dishwasher",
      cookingDrinkingLiters: 0,
    });

    // 0 + 0 + 1 + 0 + 12 + 0 = 13 L
    expect(result.dailyLiters).toBe(13);
    expect(result.status).toBe("Efficient");
    expect(result.comparisonRatio).toBeLessThan(0.2);
  });

  it("handles extreme maximum values safely without crashing", () => {
    const result = calculateFootprint({
      showerMinutes: 60, // 60 * 9 = 540 L
      toiletFlushes: 25, // 25 * 6 = 150 L
      tapRunningBrushing: true, // 12 L
      laundryLoadsPerWeek: 20, // (20 * 50) / 7 ≈ 143 L
      dishwashingMethod: "running-tap", // 40 L
      cookingDrinkingLiters: 25, // 25 L
    });

    expect(result.dailyLiters).toBeGreaterThan(800);
    expect(result.status).toBe("High");
    expect(result.comparisonRatio).toBeGreaterThan(5);
  });
});
