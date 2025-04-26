import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lascasasstr.com",
  integrations: [mdx(), sitemap(), icon()],

  image: {
    service: sharpImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

