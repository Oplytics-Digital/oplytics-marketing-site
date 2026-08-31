/**
 * Shared ROI/benefit-estimate formula, used by the full calculator on
 * Pricing and the teaser preview on Home. Benefit estimates only — no
 * cost/price figures, per the Pricing page's contact-first approach.
 */

export type CompanySize = "small" | "medium" | "large";

export interface ROIInputs {
  size: CompanySize;
  headcount: number;
  lines: number;
  sites: number;
}

export const sizePresets: Record<
  CompanySize,
  { label: string; headcount: number; lines: number; sites: number }
> = {
  small: {
    label: "Small (< 100 employees)",
    headcount: 50,
    lines: 3,
    sites: 1,
  },
  medium: {
    label: "Medium (100–500 employees)",
    headcount: 250,
    lines: 12,
    sites: 2,
  },
  large: {
    label: "Large (500+ employees)",
    headcount: 800,
    lines: 40,
    sites: 5,
  },
};

export function calculateROI(inputs: ROIInputs) {
  const { lines, sites } = inputs;
  const avgHourlyLabourCost = 22;
  const weeksPerYear = 48;

  const timeSavingsPerLine = 2 * avgHourlyLabourCost * weeksPerYear;
  const totalTimeSavings = timeSavingsPerLine * lines;

  const avgRevenuePerLine = 500000;
  const oeeImprovement = 0.03;
  const throughputGain = avgRevenuePerLine * oeeImprovement * lines;

  const meetingSavings =
    (15 / 60) * avgHourlyLabourCost * 5 * 5 * weeksPerYear * sites;

  const totalAnnualBenefit = totalTimeSavings + throughputGain + meetingSavings;

  return {
    totalAnnualBenefit: Math.round(totalAnnualBenefit),
    timeSavings: Math.round(totalTimeSavings),
    throughputGain: Math.round(throughputGain),
    meetingSavings: Math.round(meetingSavings),
  };
}
