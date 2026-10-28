export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  difficulty: "Easy" | "Medium" | "High Impact";
  iconName: string;
}

export interface HandwashingStep {
  step: number;
  title: string;
  instruction: string;
  duration: string;
  svgType: "wet-apply" | "palm-to-palm" | "back-of-hands" | "thumbs-knuckles" | "fingertips" | "rinse-dry";
}

export interface PledgeItem {
  id: string;
  title: string;
  category: "Habits" | "Hygiene" | "Community";
  estimatedDailyLitersSaved: number;
  description: string;
}

export const SOLUTIONS_TABS = {
  habits: {
    id: "habits",
    label: "Everyday Habits",
    tagline: "Small daily actions at home that collectively save millions of litres and protect family health.",
    items: [
      {
        id: "habit-leaks",
        title: "Fix Leaks Promptly",
        description:
          "A dripping faucet leaking one drop per second wastes over 3,000 litres annually. Check faucets, toilet flapper valves, and hose connections regularly.",
        impact: "Saves ~10–30 L/day per leak",
        difficulty: "Easy",
        iconName: "Wrench",
      },
      {
        id: "habit-tap-off",
        title: "Turn Off Running Taps",
        description:
          "Turn off the tap while lathering hands, brushing teeth, and shaving. Only run water when actively rinsing.",
        impact: "Saves ~12–24 L/day per person",
        difficulty: "Easy",
        iconName: "DropletOff",
      },
      {
        id: "habit-handwashing",
        title: "Wash Hands with Soap & Water",
        description:
          "Always wash hands with clean water and soap before preparing food, before eating, and after using the toilet or changing diapers.",
        impact: "Reduces diarrhoeal infections by 40%",
        difficulty: "Easy",
        iconName: "Sparkles",
      },
      {
        id: "habit-covered-containers",
        title: "Keep Drinking Water Containers Covered",
        description:
          "Store drinking water in a clean, covered vessel with a narrow mouth or a spigot to prevent dirty hands and airborne germs from contaminating the supply.",
        impact: "Prevents secondary household contamination",
        difficulty: "Easy",
        iconName: "ShieldCheck",
      },
      {
        id: "habit-waste-disposal",
        title: "Practice Safe Waste Disposal",
        description:
          "Never pour toxic chemicals, grease, medicines, or plastic into household drains or open storm gutters where they can seep into groundwater.",
        impact: "Protects local aquifers from toxins",
        difficulty: "Medium",
        iconName: "Trash2",
      },
    ] as SolutionItem[],
  },
  community: {
    id: "community",
    label: "Community Action",
    tagline: "Grassroots organizing to safeguard shared rivers, groundwater aquifers, and school health.",
    items: [
      {
        id: "community-cleanup",
        title: "Organize Local Waterway Clean-ups",
        description:
          "Lead or join community clean-up drives around local streams, ponds, beaches, and canals to remove plastic pollution and organic debris.",
        impact: "Restores local aquatic habitats and prevents sewer blockages",
        difficulty: "Medium",
        iconName: "Users",
      },
      {
        id: "community-school-clubs",
        title: "School Hygiene & WASH Clubs",
        description:
          "Support student-led water, sanitation, and hygiene (WASH) clubs in local schools. Ensure private, separated, dignified toilets for girls.",
        impact: "Boosts school attendance and equips children with lifelong habits",
        difficulty: "High Impact",
        iconName: "GraduationCap",
      },
      {
        id: "community-protect-sources",
        title: "Protect Local Water Points",
        description:
          "Construct sanitary aprons and drainage channels around community wells, boreholes, and hand pumps to prevent standing puddles and livestock runoff.",
        impact: "Protects hundreds of families from contaminated wellheads",
        difficulty: "High Impact",
        iconName: "Shield",
      },
      {
        id: "community-awareness",
        title: "Civic Awareness Campaigns",
        description:
          "Host neighborhood workshops on safe water handling, household water chlorination/boiling, and combating open defecation stigma.",
        impact: "Elevates community health norms and civic engagement",
        difficulty: "Medium",
        iconName: "Megaphone",
      },
    ] as SolutionItem[],
  },
  techPolicy: {
    id: "tech-policy",
    label: "Technology & Policy",
    tagline: "Scalable infrastructure, regenerative engineering, and public policy reforms for permanent access.",
    items: [
      {
        id: "tech-treatment",
        title: "Decentralized Water Treatment",
        description:
          "Deploy solar-powered reverse osmosis, biosand filtration, and ultraviolet purification plants in underserved villages lacking municipal mains.",
        impact: "Provides reliable safe drinking water to remote settlements",
        difficulty: "High Impact",
        iconName: "Filter",
      },
      {
        id: "tech-rainwater",
        title: "Rainwater Harvesting Systems",
        description:
          "Rooftop collection tanks and bioswales capture seasonal rainfall, recharge depleting subterranean water tables, and mitigate urban flash flooding.",
        impact: "Replenishes depleted aquifers and supplies non-potable water",
        difficulty: "High Impact",
        iconName: "CloudRain",
      },
      {
        id: "tech-sanitation-waste",
        title: "Fecal Sludge Management (FSM)",
        description:
          "Modern vacuum trucks and non-sewered sanitation treatment facilities convert collected septage into pathogen-free agricultural compost and biogas.",
        impact: "Transforms harmful waste into renewable resources",
        difficulty: "High Impact",
        iconName: "Recycle",
      },
      {
        id: "tech-policy-advocacy",
        title: "Supporting Progressive Public Programs",
        description:
          "Advocate for municipal budgets that subsidize connection fees for low-income households and mandate strict monitoring of industrial effluents.",
        impact: "Institutionalizes equal water rights under law",
        difficulty: "High Impact",
        iconName: "Building2",
      },
    ] as SolutionItem[],
  },
};

export const HANDWASHING_STEPS: HandwashingStep[] = [
  {
    step: 1,
    title: "Wet & Apply Soap",
    instruction:
      "Wet hands with clean, running water (warm or cold), turn off the tap, and apply enough soap to cover all hand surfaces.",
    duration: "5 seconds",
    svgType: "wet-apply",
  },
  {
    step: 2,
    title: "Palm to Palm",
    instruction:
      "Rub hands palm to palm in a circular motion until a rich lather covers both hands.",
    duration: "5 seconds",
    svgType: "palm-to-palm",
  },
  {
    step: 3,
    title: "Back of Hands & Fingers",
    instruction:
      "Rub the right palm over the back of the left hand with interlaced fingers, then switch hands and repeat.",
    duration: "5 seconds",
    svgType: "back-of-hands",
  },
  {
    step: 4,
    title: "Thumbs & Knuckles",
    instruction:
      "Grasp the left thumb with your right hand and rotate thoroughly. Switch hands and clean the other thumb and knuckles.",
    duration: "5 seconds",
    svgType: "thumbs-knuckles",
  },
  {
    step: 5,
    title: "Fingertips to Palms",
    instruction:
      "Rub the tips of your fingers backwards and forwards in your opposite palm to scrub beneath the fingernails.",
    duration: "5 seconds",
    svgType: "fingertips",
  },
  {
    step: 6,
    title: "Rinse & Dry Thoroughly",
    instruction:
      "Rinse hands under clean, running water until all soap is gone, then dry completely with a clean towel or air dry.",
    duration: "5 seconds",
    svgType: "rinse-dry",
  },
];

export const PLEDGE_ITEMS: PledgeItem[] = [
  {
    id: "pledge-turn-off-tap",
    title: "Turn off the tap while brushing teeth and shaving",
    category: "Habits",
    estimatedDailyLitersSaved: 16,
    description: "Saves up to 16 litres daily per person simply by pausing the tap.",
  },
  {
    id: "pledge-shower-time",
    title: "Limit showers to 5 minutes or install an efficient showerhead",
    category: "Habits",
    estimatedDailyLitersSaved: 25,
    description: "Reduces unnecessary hot water and cuts household water use dramatically.",
  },
  {
    id: "pledge-fix-leaks",
    title: "Inspect household taps and toilets for leaks and repair them",
    category: "Habits",
    estimatedDailyLitersSaved: 20,
    description: "Eliminates persistent silent drips that waste thousands of litres a year.",
  },
  {
    id: "pledge-wash-soap",
    title: "Wash hands with soap for at least 20 seconds at critical times",
    category: "Hygiene",
    estimatedDailyLitersSaved: 0,
    description: "Protects yourself and your family from gastrointestinal and viral illnesses.",
  },
  {
    id: "pledge-safe-storage",
    title: "Store drinking water in a covered, clean container with a spigot",
    category: "Hygiene",
    estimatedDailyLitersSaved: 0,
    description: "Prevents secondary bacterial contamination of purified water.",
  },
  {
    id: "pledge-no-drain-toxins",
    title: "Never dispose of paint, motor oil, or medications down household drains",
    category: "Community",
    estimatedDailyLitersSaved: 10,
    description: "Safeguards municipal sewage treatment systems and natural groundwater aquifers.",
  },
  {
    id: "pledge-advocate",
    title: "Educate at least 3 friends or family members on UN SDG 6",
    category: "Community",
    estimatedDailyLitersSaved: 30,
    description: "Multiplies awareness and collective civic impact across your personal network.",
  },
];
