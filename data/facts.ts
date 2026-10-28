export interface FactItem {
  id: string;
  metric: string;
  title: string;
  description: string;
  category: "drinking-water" | "sanitation" | "hygiene" | "inequality";
  iconName: string;
  source: string;
  year: number;
  sourceUrl: string;
}

export interface CoverageDataPoint {
  year: number;
  coverage: number;
  label: string;
}

export const OFFICIAL_SOURCE = {
  name: "WHO/UNICEF Joint Monitoring Programme (JMP)",
  reportTitle:
    "Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities",
  publishedDate: "August 2025",
  dataToYear: 2024,
  url: "https://data.unicef.org/resources/jmp-report-2025/",
  citation:
    "Source: WHO/UNICEF Joint Monitoring Programme (JMP), 2025 report.",
};

export const HERO_COUNTERS = [
  {
    id: "counter-water",
    value: 2.1,
    unit: "billion",
    label: "Lack safely managed drinking water",
    subtext: "About 1 in 4 people worldwide; includes 106M using untreated surface water.",
    accent: "water",
  },
  {
    id: "counter-sanitation",
    value: 3.4,
    unit: "billion",
    label: "Lack safely managed sanitation",
    subtext: "Over 40% of the world; includes 354M who still practice open defecation.",
    accent: "teal",
  },
  {
    id: "counter-hygiene",
    value: 1.7,
    unit: "billion",
    label: "Lack basic hygiene at home",
    subtext: "Includes 611 million people with no handwashing facilities at all.",
    accent: "green",
  },
];

export const VERIFIED_FACTS: FactItem[] = [
  {
    id: "fact-drinking-water-global",
    metric: "2.1 Billion",
    title: "Unsafe Drinking Water",
    description:
      "2.1 billion people lack safely managed drinking water, including 106 million who drink directly from untreated surface water like rivers, lakes, and ponds. That is about 1 in 4 people worldwide.",
    category: "drinking-water",
    iconName: "Droplets",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-sanitation-global",
    metric: "3.4 Billion",
    title: "Inadequate Sanitation Systems",
    description:
      "3.4 billion people lack safely managed sanitation, including 354 million people who practice open defecation due to lack of private or safe toilets.",
    category: "sanitation",
    iconName: "ShieldAlert",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-hygiene-global",
    metric: "1.7 Billion",
    title: "Basic Hygiene Deprivation",
    description:
      "1.7 billion people lack basic hygiene services at home, including 611 million individuals with no handwashing facilities whatsoever.",
    category: "hygiene",
    iconName: "HandMetal",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-drinking-progress",
    metric: "+961 Million",
    title: "Global Drinking Water Progress",
    description:
      "Since 2015, about 961 million people gained access to safely managed drinking water, elevating global coverage from 68% in 2015 to 74% in 2024.",
    category: "drinking-water",
    iconName: "TrendingUp",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-handwashing-progress",
    metric: "66% → 80%",
    title: "Expansion of Household Handwashing",
    description:
      "Household handwashing facilities equipped with soap and water improved globally from 66% in 2015 to 80% in 2024.",
    category: "hygiene",
    iconName: "Sparkles",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-fragile-contexts",
    metric: "-38 Points",
    title: "Severe Disparity in Fragile Contexts",
    description:
      "In fragile and conflict-affected contexts, safely managed drinking water coverage is 38 percentage points lower than in non-fragile countries.",
    category: "inequality",
    iconName: "AlertTriangle",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-rural-urban",
    metric: "50% → 60%",
    title: "Rural Gains vs Urban Stagnation",
    description:
      "Rural safely managed drinking water coverage rose from 50% in 2015 to 60% in 2024. In contrast, urban coverage has stagnated due to rapid population growth outpacing infrastructure.",
    category: "drinking-water",
    iconName: "Trees",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
  {
    id: "fact-ldcs-disparity",
    metric: "2x Risk",
    title: "Least Developed Countries Vulnerability",
    description:
      "People living in Least Developed Countries (LDCs) are more than twice as likely to lack basic drinking water and sanitation services compared to the global average.",
    category: "inequality",
    iconName: "Globe",
    source: OFFICIAL_SOURCE.name,
    year: OFFICIAL_SOURCE.dataToYear,
    sourceUrl: OFFICIAL_SOURCE.url,
  },
];

export const WATER_COVERAGE_TIMELINE: CoverageDataPoint[] = [
  { year: 2015, coverage: 68, label: "68% (2015 Baseline)" },
  { year: 2016, coverage: 68.7, label: "68.7%" },
  { year: 2017, coverage: 69.4, label: "69.4%" },
  { year: 2018, coverage: 70.1, label: "70.1%" },
  { year: 2019, coverage: 70.8, label: "70.8%" },
  { year: 2020, coverage: 71.4, label: "71.4%" },
  { year: 2021, coverage: 72.1, label: "72.1%" },
  { year: 2022, coverage: 72.7, label: "72.7%" },
  { year: 2023, coverage: 73.4, label: "73.4%" },
  { year: 2024, coverage: 74, label: "74% (2024 JMP Update)" },
];

export const DEFINITIONS = {
  drinkingWater: {
    term: "Safely Managed Drinking Water",
    summary:
      "Drinking water from an improved water source that is located on premises, available when needed, and free from faecal and priority chemical contamination.",
    steps: [
      {
        step: 1,
        title: "On Premises",
        description: "Accessible directly within the dwelling, plot, or yard.",
      },
      {
        step: 2,
        title: "Available When Needed",
        description: "Reliable supply available for at least 12 hours a day.",
      },
      {
        step: 3,
        title: "Free from Contamination",
        description:
          "Zero detectable E. coli bacteria and priority toxic chemicals (arsenic, fluoride).",
      },
    ],
  },
  sanitation: {
    term: "Safely Managed Sanitation",
    summary:
      "Use of improved facilities that are not shared with other households and where excreta are safely disposed of in situ or transported and treated off-site.",
    steps: [
      {
        step: 1,
        title: "Hygienic Facility",
        description:
          "Private, unshared toilet that hygienically separates waste from human contact.",
      },
      {
        step: 2,
        title: "Safe Containment",
        description:
          "Robust septic tanks, sewer connections, or safely sealed pit latrines.",
      },
      {
        step: 3,
        title: "Treated & Disposed",
        description:
          "Wastewater and sludge transported to a treatment facility and treated safely before release.",
      },
    ],
  },
};

export const VULNERABLE_GROUPS = [
  {
    title: "Low-Income Countries & LDCs",
    description:
      "Citizens are more than twice as likely to lack basic drinking water and safely managed sanitation.",
    iconName: "Globe2",
  },
  {
    title: "Fragile & Conflict Contexts",
    description:
      "Coverage is 38 percentage points lower where water infrastructure has collapsed or been damaged.",
    iconName: "ShieldAlert",
  },
  {
    title: "Rural Communities",
    description:
      "Historically lowest coverage, though rising from 50% to 60% since 2015 through decentralized wells and gravity systems.",
    iconName: "Trees",
  },
  {
    title: "Children Under Five",
    description:
      "Most vulnerable to waterborne diarrhoeal diseases and malnutrition caused by chronic parasitic infections.",
    iconName: "HeartPulse",
  },
  {
    title: "Minority & Indigenous Groups",
    description:
      "Frequently face systemic under-investment in municipal water pipes and waste infrastructure.",
    iconName: "Users",
  },
];
