import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clean Water & Sanitation (SDG 6)",
    short_name: "Clean Water",
    description: "Every drop matters. Clean water, safe sanitation, healthy communities.",
    start_url: "/",
    display: "standalone",
    background_color: "#ECF7F8",
    theme_color: "#2A88CF",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
