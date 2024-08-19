import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bobpulaski.github.io",
  base: "/opb158",
  integrations: [mdx(), sitemap()],
});
