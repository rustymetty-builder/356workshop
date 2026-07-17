// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://356workshop.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
