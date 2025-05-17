// scripts/site-map.js   (still .js under ES module mode)

import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// 1. Derive __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url); // :contentReference[oaicite:1]{index=1}
const __dirname = dirname(__filename);

// 2. Your site’s base URL and routes
const BASE_URL = "https://hinjawadibike.com";
const staticRoutes = [
  "/",
  "/privacy",
  "/terms",
  "/about",
  // "/company",
  "/bikes/comming_soon",
  "/vehicles/tata-altroz-icng",
];

// let dynamicRoutes = [];
// try {
//   const { default: BikeData } = await import("../src/assets/BikeData.js");
//   dynamicRoutes = BikeData.map((b) => `/vehicles/${b.slug || b.bikeId}`);
// } catch (e) {
//   console.warn("⚠️ Could not load BikeData.js:", e.message);
// }

// 3. Build the sitemap XML

const allRoutes = Array.from(new Set(staticRoutes));
const urlsXml = allRoutes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

// 4. Write to public/sitemap.xml
const outPath = resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outPath, sitemap.trim());
console.log(`✅ sitemap.xml (${allRoutes.length} URLs) ➜ ${outPath}`);
