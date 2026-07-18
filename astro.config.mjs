import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nguy1241.github.io',
  integrations: [mdx(), tailwind()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms (tweak if needed)
    },
  },
});