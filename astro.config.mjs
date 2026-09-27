// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://riadibadulla.com',
  trailingSlash: 'always',
  // Keep whitespace between text and inline links that start on a new line.
  compressHTML: false,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
