import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/projects/protected-digital-product-platform",
    "/projects/inspire-robotics-challenge-platform",
    "/projects/personal-finance-application",
  ];

  return pages.map((path, index) => ({
    url: `https://murtamadpratama.my.id${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.7,
  }));
}
