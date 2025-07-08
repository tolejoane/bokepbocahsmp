import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokepbocahsmp.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});