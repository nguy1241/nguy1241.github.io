import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), tailwind()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms (tweak if needed)
    },
  },
});
