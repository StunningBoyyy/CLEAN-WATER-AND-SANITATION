export interface QuizQuestion {
  id: number;
  question: string;
  isFact: boolean; // true = Fact, false = Myth
  explanation: string;
  topic: string;
  sourceNote: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "If water looks crystal clear, it is completely safe to drink without any treatment.",
    isFact: false,
    explanation:
      "Myth! Water clarity only indicates absence of visible dirt. Deadly pathogens (such as cholera bacteria, norovirus, and Giardia) as well as toxic dissolved chemicals (like arsenic and lead) are completely invisible to the naked eye.",
    topic: "Water Safety",
    sourceNote: "WHO Guidelines for Drinking-water Quality",
  },
  {
    id: 2,
    question:
      "Washing hands with soap and water can reduce diarrhoeal diseases by up to 40%.",
    isFact: true,
    explanation:
      "Fact! Regular handwashing with soap physically lifts and dissolves bacteria and lipid-enveloped viruses, making it one of the single most cost-effective public health interventions.",
    topic: "Hygiene",
    sourceNote: "UNICEF / CDC Hand Hygiene Evidence",
  },
  {
    id: 3,
    question:
      "Boiling water removes heavy metals, dissolved chemicals, and pesticides.",
    isFact: false,
    explanation:
      "Myth! Boiling kills biological microorganisms (bacteria, viruses, parasites), but it actually concentrates heavy metals (like lead or arsenic) as water evaporates. Chemical filtration or reverse osmosis is required to remove toxic minerals.",
    topic: "Water Treatment",
    sourceNote: "WHO Water Sanitation & Health Guidance",
  },
  {
    id: 4,
    question:
      "Globally, about 1 in 4 people (2.1 billion) still lack safely managed drinking water at home.",
    isFact: true,
    explanation:
      "Fact! The 2025 WHO/UNICEF JMP report confirms that 2.1 billion individuals lack water located on premises, reliably available, and free from faecal and chemical contamination.",
    topic: "Global Data",
    sourceNote: "WHO/UNICEF JMP 2025 Report",
  },
  {
    id: 5,
    question:
      "Safe sanitation is achieved simply by having a toilet, regardless of where the waste goes.",
    isFact: false,
    explanation:
      "Myth! By international public health definitions, sanitation is only 'safely managed' if human waste is safely contained, transported, and treated before environmental release. Unmanaged pits and leaky cesspools pollute groundwater.",
    topic: "Sanitation Standards",
    sourceNote: "UN SDG 6 Target 6.2 Criteria",
  },
  {
    id: 6,
    question:
      "A standard 5-minute shower generally uses significantly less water than filling a standard bathtub.",
    isFact: true,
    explanation:
      "Fact! An average shower (at ~9 L/minute) consumes roughly 45 litres over 5 minutes, compared to 120–150 litres required to fill a standard bathtub.",
    topic: "Water Conservation",
    sourceNote: "Water Conservation Standards & Fixture Benchmarks",
  },
  {
    id: 7,
    question:
      "Clean drinking water stored in an open bucket remains safe to drink as long as nobody drinks directly from it.",
    isFact: false,
    explanation:
      "Myth! Open containers can be rapidly re-contaminated by airborne particles, flies, household dust, and dirty utensils used to scoop water. Treated water must be stored in a clean, covered container with a dedicated tap or ladle.",
    topic: "Safe Storage",
    sourceNote: "CDC Safe Water System (SWS)",
  },
  {
    id: 8,
    question:
      "Turning off the tap while brushing your teeth can save up to 12 litres of water each day.",
    isFact: true,
    explanation:
      "Fact! Running taps typically flow at 6 litres per minute. Leaving the tap on for two minutes twice daily wastes around 12 to 24 litres every single day.",
    topic: "Everyday Habits",
    sourceNote: "EPA WaterSense Benchmarks",
  },
];
