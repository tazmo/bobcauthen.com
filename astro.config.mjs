import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.website,

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      // 2. Prevent Vite from trying to pre-bundle these specific problematic files
      exclude: [
        'astro', 
        'astro/virtual-modules/transitions-router.js',
        'astro/virtual-modules/transitions-types.js',
        'astro/virtual-modules/transitions-events.js',
        'astro/virtual-modules/transitions-swap-functions.js'
      ],
    },
    server: {
      // Forces vite to ignore the cache on the next startup
      force: true
    }
  },

  integrations: [mdx(), sitemap()],
  adapter: cloudflare()
});
