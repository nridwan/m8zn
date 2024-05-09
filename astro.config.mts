import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), mdx(), pagefind()],
});
