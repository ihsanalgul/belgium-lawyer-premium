import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blogIndex: resolve(__dirname, 'blog/index.html'),
        blogTutukluluk: resolve(__dirname, 'blog/tutukluluk-haklari.html'),
        blogSorusturma: resolve(__dirname, 'blog/sorusturma-asamasinda-mudafaa.html'),
        blogUluslararasi: resolve(__dirname, 'blog/uluslararasi-ceza-dosyalari.html'),
      },
    },
  },
});
