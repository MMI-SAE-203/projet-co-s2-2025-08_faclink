// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  integrations: [alpinejs(), sitemap()],
  adapter: netlify(),
  site: "https://faclink.netlify.app",

  // 💡 Pour éviter que PocketBase casse le build
  build: {
    rollupOptions: {
      external: ['pocketbase']
    }
  }
});
