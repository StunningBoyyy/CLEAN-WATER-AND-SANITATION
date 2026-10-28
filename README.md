# Clean Water & Sanitation (UN SDG 6) — "Every drop matters."

> A production-ready, fully responsive, and accessible awareness platform dedicated to **United Nations Sustainable Development Goal 6 (Clean Water and Sanitation)**. The platform guides visitors through a structured journey: **Awareness → Understanding → Action**.

---

## 👥 Founders & Leadership

This project was founded and engineered by:
- **Vishwa Vijay** — Co-Founder, Clean Water & Sanitation Project
- **Prateek Saroj** — Co-Founder, Clean Water & Sanitation Project

**Project Focus:** Design + User Research + Web Engineering

---

## 🌟 Key Features

1. **Journey-Driven Architecture:**
   - **Home (`/`):** Hero with animated inline SVG water drop, 3 scroll-triggered animated counters (2.1B drinking water, 3.4B sanitation, 1.7B hygiene), 3 journey cards with color-coded accent bars, and WHO/UNICEF JMP citation.
   - **The Issue (`/the-issue`):** 3-step diagram defining "safely managed" water & sanitation, interactive Recharts timeline (2015–2024 global coverage), 8 verified fact cards, vulnerable groups breakdown, and primary sources documentation.
   - **Why It Matters (`/why-it-matters`):** 4 large impact cards (Health, Education, Safety/Dignity, Community/Economy) and a visual Cause → Effect flow showing how water insecurity traps communities in poverty.
   - **Solutions (`/solutions`):** 3-tab solutions panel (Everyday Habits, Community Action, Technology & Policy) and an interactive 6-step WHO-aligned handwashing stepper with vector SVG illustrations.
   - **Take Action (`/take-action`):**
     - **Water Footprint Calculator:** Accurate input controls (shower, toilet, brushing tap, laundry, dishes, cooking), benchmark comparison bar, and 3 personalized conservation tips.
     - **Myth vs Fact Quiz:** 8 verified public health questions, instant feedback, explanations, and final score.
     - **Pledge Board:** LocalStorage persistence with error handling, SVG progress ring, impact score calculation, and Web Share API / clipboard sharing.
     - **Contact / Join Form:** Accessible client validation and `/api/contact` Next.js route handler.
   - **About (`/about`):** Mission and vision, prominent founder recognition for Vishwa Vijay and Prateek Saroj, and JSON-LD Organization schema.
   - **Privacy (`/privacy`):** Transparent notice detailing zero commercial ad trackers and client-side storage policies.
   - **Custom 404 (`not-found.tsx`):** Themed aquatic recovery page.

2. **Design System & Visual Language:**
   - Palette: Deep Navy (`#14374F`), Water Blue (`#2A88CF`), Teal (`#279985`), SDG Green (`#67A74B`), Soft Aqua (`#ECF7F8`), and Light Blue Panel (`#DDF0F9`).
   - Strict dark mode support with automatic system preference detection and header manual toggle.
   - Typography: Poppins for headings, Inter for body text (via `next/font`).
   - WCAG 2.1 AA accessible: semantic landmarks, one `h1` per page, visible focus rings, ARIA roles, and `prefers-reduced-motion` compliance.

3. **Data Authenticity:**
   - All statistics are drawn directly from the August 2025 WHO/UNICEF Joint Monitoring Programme (JMP) report ("Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities"). Zero fabricated statistics.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3, CSS variables, glassmorphism utilities
- **Motion & Icons:** Framer Motion, Lucide React, semantic inline SVGs
- **Data Visualization:** Recharts
- **Testing:** Vitest, React Testing Library, JSDOM, Playwright E2E
- **Code Quality:** ESLint (`next/core-web-vitals`), Prettier, TypeScript `tsc --noEmit`

---

## 📁 Folder Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI pipeline: install, lint, typecheck, test, build
├── app/
│   ├── layout.tsx                 # Root layout: fonts, Navbar, Footer, SkipLink, ThemeProvider
│   ├── page.tsx                   # Home page
│   ├── the-issue/page.tsx         # The Global Issue page
│   ├── why-it-matters/page.tsx    # Why It Matters page
│   ├── solutions/page.tsx         # Solutions & Handwashing Stepper page
│   ├── take-action/page.tsx       # Take Action, Calculator, Quiz, Pledge & Form
│   ├── about/page.tsx             # Founders (Vishwa Vijay & Prateek Saroj) & Mission
│   ├── privacy/page.tsx           # Privacy Policy
│   ├── api/contact/route.ts       # Contact form API endpoint
│   ├── not-found.tsx              # Custom 404
│   ├── icon.svg                   # Water-drop favicon
│   ├── robots.ts                  # Robots metadata
│   ├── sitemap.ts                 # XML Sitemap generator
│   ├── manifest.ts                # PWA web manifest
│   └── globals.css                # Tailwind directives & CSS variables
├── components/
│   ├── layout/                    # Navbar, MobileNav, Footer, ThemeToggle, SkipLink
│   ├── home/                      # HeroSection, AnimatedCounters, JourneyCards, MissionStrip
│   ├── issue/                     # DefinitionDiagram, CoverageChart, FactCardGrid, VulnerableGroups, SourcesSection
│   ├── why/                       # ImpactPillars, CauseEffectFlow
│   ├── solutions/                 # SolutionsTabs, HandwashingStepper
│   ├── action/                    # PledgeBoard, FootprintCalc, Quiz, ContactForm, ShareButtons
│   └── ui/                        # Button, Card, ProgressRing, Toast, WaveDivider
├── data/
│   ├── facts.ts                   # WHO/UNICEF JMP verified facts & coverage timeline
│   ├── quiz.ts                    # 8 Myth vs Fact questions & explanations
│   ├── actions.ts                 # Solutions tabs, handwashing steps & pledge items
│   └── footprint.ts               # Calculator consumption benchmarks & logic
├── lib/
│   ├── theme.tsx                  # Light/dark mode provider
│   ├── utils.ts                   # Tailwind class merge & number formatters
│   └── validators.ts              # Form validation & string sanitization
├── tests/
│   ├── unit/                      # Footprint, validator & quiz logic unit tests
│   ├── components/                # React Testing Library component tests
│   ├── e2e/                       # Playwright smoke tests
│   └── setup.ts                   # Vitest RTL setup
├── next.config.mjs                # Security headers & Next.js config
├── tailwind.config.ts             # Custom palette tokens & typography
├── tsconfig.json                  # Strict TypeScript configuration
└── vitest.config.ts               # Vitest test runner configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm (or pnpm)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd "design thinking website"

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
```

### Running Locally
```bash
# Start development server
npm run dev

# Open in browser: http://localhost:3000
```

---

## 🧪 Verification & Testing Scripts

```bash
# 1. Lint check (0 errors, 0 warnings)
npm run lint

# 2. TypeScript type check
npm run typecheck

# 3. Unit & Component tests (Vitest)
npm run test

# 4. Production build
npm run build

# 5. Playwright E2E smoke tests
npm run test:e2e

# Code formatting
npm run format:check
npm run format
```

---

## ✏️ How to Edit Content & Data

All facts, quiz questions, solutions, and calculator benchmarks live in modular TypeScript files in `/data`:
1. **Facts & Charts:** Edit `/data/facts.ts` to update verified metrics or add historical data points to `WATER_COVERAGE_TIMELINE`.
2. **Myth vs Fact Quiz:** Edit `/data/quiz.ts` to add or modify questions, explanations, and citations.
3. **Solutions & Pledges:** Edit `/data/actions.ts` to update everyday habits, community projects, policy actions, or pledge items.
4. **Water Footprint Constants:** Edit `/data/footprint.ts` to adjust per-minute shower flow rates, flush volumes, or benchmark averages.

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Vercel automatically detects Next.js.
4. Leave build settings as default (`npm run build`).
5. (Optional) Set `NEXT_PUBLIC_SITE_URL` to your production custom domain in the Environment Variables section.
6. Click **Deploy**.

### Netlify (Alternative)
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your Git repository.
3. Set Build command: `npm run build`
4. Set Publish directory: `.next`
5. Install the `@netlify/plugin-nextjs` package if prompted.
6. Click **Deploy site**.

---

## 📜 License & Credits

- Founders: **Vishwa Vijay** & **Prateek Saroj**
- Data Citation: World Health Organization (WHO) and United Nations Children's Fund (UNICEF) Joint Monitoring Programme for Water Supply, Sanitation and Hygiene (JMP), 2025.
