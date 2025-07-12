// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import { visit } from "unist-util-visit";
import path from "node:path";

const base = "/infinity-hindi";

// Remark plugin to prepend base path to image sources
function remarkPrependBasePath() {
  /** @param {import('mdast').Root} tree */
  return function (tree) {
    visit(tree, "image", (node) => {
      if (node.url.startsWith("/")) {
        node.url = path.posix.join(base, node.url);
      }
    });
  };
}


// https://astro.build/config
export default defineConfig({
  site: "https://rsinghal757.github.io",
  base: base,
  integrations: [partytown()],
  markdown: {
    remarkPlugins: [remarkPrependBasePath],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
