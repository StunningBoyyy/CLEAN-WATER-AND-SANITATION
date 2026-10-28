import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cleanwater-sdg6.org";
  const currentDate = new Date();

  const routes = [
    "",
    "/the-issue",
    "/why-it-matters",
    "/solutions",
    "/take-action",
    "/about",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/about" ? 0.7 : 0.8,
  }));
}
