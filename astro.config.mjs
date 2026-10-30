// @ts-check
import { defineConfig, logHandlers } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  integrations: [htmx()]
});