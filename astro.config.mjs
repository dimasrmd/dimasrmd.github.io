// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   site: 'https://example.com',
//   integrations: [mdx(), sitemap()],

//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

export default defineConfig({
  // Sesuaikan dengan username dan nama repo kamu
  site: 'https://dimasrmd.github.io',
  base: '/BLOG-JURNAL-HARIAN-MAHASISWA', 
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});