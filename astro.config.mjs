// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://plombiertest.com",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(
  {
    changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date(),
  }
  )]
});