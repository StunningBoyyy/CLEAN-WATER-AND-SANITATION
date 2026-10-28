import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ECF7F8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1C2A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cleanwater-sdg6.org"),
  title: {
    default: "Clean Water & Sanitation | Every Drop Matters (UN SDG 6)",
    template: "%s | Clean Water & Sanitation (SDG 6)",
  },
  description:
    "Every drop matters. Clean water • Safe sanitation • Healthy communities. Explore global data, understand root causes, calculate your water footprint, and take meaningful action for UN SDG 6.",
  authors: [
    { name: "Vishwa Vijay" },
    { name: "Prateek Saroj" },
  ],
  creator: "Vishwa Vijay & Prateek Saroj",
  publisher: "Clean Water & Sanitation Project",
  keywords: [
    "Clean Water",
    "Sanitation",
    "UN SDG 6",
    "Sustainable Development Goals",
    "Hygiene",
    "WHO UNICEF JMP 2025",
    "Water Footprint Calculator",
    "Vishwa Vijay",
    "Prateek Saroj",
  ],
  openGraph: {
    title: "Clean Water & Sanitation | Every Drop Matters (UN SDG 6)",
    description:
      "2.1 billion people lack safely managed drinking water. Discover the reality, understand why it matters, and take action today.",
    url: "https://cleanwater-sdg6.org",
    siteName: "Clean Water & Sanitation (UN SDG 6)",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Water & Sanitation | Every Drop Matters (UN SDG 6)",
    description:
      "Every drop matters. Explore the UN SDG 6 crisis, calculate your household footprint, and pledge your commitment.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body className="antialiased min-h-screen flex flex-col bg-aqua dark:bg-navy-950 text-navy dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
