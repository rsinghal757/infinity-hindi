// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://rsinghal757.github.io",
  base: "/infinity-hindi",
  integrations: [partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
