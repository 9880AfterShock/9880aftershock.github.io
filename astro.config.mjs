// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  integrations: [htmx()],
  site: "https://9880aftershock.github.io",
  base: "/official-website",
});
