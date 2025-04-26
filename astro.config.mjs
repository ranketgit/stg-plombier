// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon"; 

// https://astro.build/config
export default defineConfig({
  site: "https://plombier-david.be",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(
  {
    changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date(),
  }
  ),
  icon()
]
});