export interface FootprintInputs {
  showerMinutes: number; // minutes per day (0 - 60)
  toiletFlushes: number; // flushes per day (0 - 25)
  tapRunningBrushing: boolean; // true = tap left running, false = turned off
  laundryLoadsPerWeek: number; // loads per week (0 - 20)
  dishwashingMethod: "running-tap" | "basin" | "dishwasher"; // method
  cookingDrinkingLiters: number; // liters per day (0 - 25)
}

export interface FootprintBreakdown {
  shower: number;
  toilet: number;
  brushing: number;
  laundryDaily: number;
  dishwashing: number;
  cookingDrinking: number;
}

export interface FootprintResult {
  dailyLiters: number;
  weeklyLiters: number;
  annualLiters: number;
  breakdown: FootprintBreakdown;
  comparisonRatio: number; // relative to benchmark (1.0 = equal)
  status: "Efficient" | "Moderate" | "High";
  tips: string[];
}

export const FOOTPRINT_NOTE =
  "Estimates only. Real use varies by home and fixtures. Values reflect approximate averages.";

/**
 * Benchmark constants based on global water conservation research (approximate averages)
 */
export const CONSUMPTION_CONSTANTS = {
  showerLitersPerMinute: 9, // Average standard showerhead: ~9 L/min
  toiletLitersPerFlush: 6, // Dual/standard flush average: ~6 L/flush
  brushingRunningTapLiters: 12, // Tap running 2 mins x 6 L/min
  brushingTurnedOffLiters: 1, // Cup / quick rinse: ~1 L
  laundryLitersPerLoad: 50, // Standard washing machine: ~50 L/load
  dishwashingRunningTapDaily: 40, // 3 meals running tap: ~40 L/day
  dishwashingBasinDaily: 16, // Basin wash & rinse: ~16 L/day
  dishwashingDishwasherDaily: 12, // Energy-efficient dishwasher per daily cycle: ~12 L
  defaultCookingDrinkingDaily: 5, // Basic cooking and drinking: ~5 L/day
  globalDevelopedBenchmarkDaily: 145, // Average developed urban household per capita benchmark: 145 L/day
  whoBasicNeedDaily: 50, // WHO recommended standard for health & hygiene: 50 L/day
};

export const INPUT_LIMITS = {
  showerMinutes: { min: 0, max: 60, default: 8 },
  toiletFlushes: { min: 0, max: 25, default: 5 },
  laundryLoadsPerWeek: { min: 0, max: 20, default: 2 },
  cookingDrinkingLiters: { min: 0, max: 25, default: 5 },
};

/**
 * Sanitizes and clamps numerical inputs to prevent NaN, null, negative, or excessive values.
 */
export function clampInput(
  value: unknown,
  min: number,
  max: number,
  fallback: number
): number {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }
  const parsed = Number(value);
  if (isNaN(parsed) || !isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

/**
 * Pure calculation function for water footprint.
 */
export function calculateFootprint(inputs: Partial<FootprintInputs>): FootprintResult {
  const showerMinutes = clampInput(
    inputs.showerMinutes,
    INPUT_LIMITS.showerMinutes.min,
    INPUT_LIMITS.showerMinutes.max,
    INPUT_LIMITS.showerMinutes.default
  );

  const toiletFlushes = clampInput(
    inputs.toiletFlushes,
    INPUT_LIMITS.toiletFlushes.min,
    INPUT_LIMITS.toiletFlushes.max,
    INPUT_LIMITS.toiletFlushes.default
  );

  const laundryLoads = clampInput(
    inputs.laundryLoadsPerWeek,
    INPUT_LIMITS.laundryLoadsPerWeek.min,
    INPUT_LIMITS.laundryLoadsPerWeek.max,
    INPUT_LIMITS.laundryLoadsPerWeek.default
  );

  const cookingDrinking = clampInput(
    inputs.cookingDrinkingLiters,
    INPUT_LIMITS.cookingDrinkingLiters.min,
    INPUT_LIMITS.cookingDrinkingLiters.max,
    INPUT_LIMITS.cookingDrinkingLiters.default
  );

  const showerDaily = showerMinutes * CONSUMPTION_CONSTANTS.showerLitersPerMinute;
  const toiletDaily = toiletFlushes * CONSUMPTION_CONSTANTS.toiletLitersPerFlush;
  const brushingDaily = inputs.tapRunningBrushing
    ? CONSUMPTION_CONSTANTS.brushingRunningTapLiters
    : CONSUMPTION_CONSTANTS.brushingTurnedOffLiters;

  const laundryWeekly = laundryLoads * CONSUMPTION_CONSTANTS.laundryLitersPerLoad;
  const laundryDaily = Math.round(laundryWeekly / 7);

  let dishwashingDaily = CONSUMPTION_CONSTANTS.dishwashingRunningTapDaily;
  if (inputs.dishwashingMethod === "basin") {
    dishwashingDaily = CONSUMPTION_CONSTANTS.dishwashingBasinDaily;
  } else if (inputs.dishwashingMethod === "dishwasher") {
    dishwashingDaily = CONSUMPTION_CONSTANTS.dishwashingDishwasherDaily;
  }

  const dailyTotal =
    showerDaily +
    toiletDaily +
    brushingDaily +
    laundryDaily +
    dishwashingDaily +
    cookingDrinking;

  const weeklyTotal = Math.round(dailyTotal * 7);
  const annualTotal = Math.round(dailyTotal * 365);

  const ratio = Number(
    (dailyTotal / CONSUMPTION_CONSTANTS.globalDevelopedBenchmarkDaily).toFixed(2)
  );

  let status: FootprintResult["status"] = "Moderate";
  if (dailyTotal <= 90) {
    status = "Efficient";
  } else if (dailyTotal > 160) {
    status = "High";
  }

  // Generate 3 personalized tips based on largest contributors
  const tips: string[] = [];

  if (showerMinutes > 6) {
    tips.push(
      `Cutting your shower from ${showerMinutes} to 5 minutes could save approximately ${(showerMinutes - 5) * 9} litres every day.`
    );
  } else {
    tips.push(
      "Your shower duration is very water-conscious! An aerated showerhead can save even more without losing pressure."
    );
  }

  if (inputs.tapRunningBrushing) {
    tips.push(
      "Turning the tap off while brushing will save ~11 litres daily (~4,000 litres a year) with zero effort."
    );
  } else if (inputs.dishwashingMethod === "running-tap") {
    tips.push(
      "Switching from running-tap dishwashing to a filled wash-and-rinse basin saves ~24 litres every single day."
    );
  } else {
    tips.push(
      "Regularly check your toilet tank flapper: a silent leak can silently waste 200+ litres per day."
    );
  }

  if (laundryLoads > 3) {
    tips.push(
      `Only running full laundry loads could trim 1–2 cycles weekly, saving up to ${50 * 2} litres each week.`
    );
  } else {
    tips.push(
      "Collect greywater from rinsing vegetables to water your houseplants or garden naturally."
    );
  }

  return {
    dailyLiters: dailyTotal,
    weeklyLiters: weeklyTotal,
    annualLiters: annualTotal,
    breakdown: {
      shower: showerDaily,
      toilet: toiletDaily,
      brushing: brushingDaily,
      laundryDaily,
      dishwashing: dishwashingDaily,
      cookingDrinking,
    },
    comparisonRatio: ratio,
    status,
    tips: tips.slice(0, 3),
  };
}
