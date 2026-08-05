import { readdirSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)));

function blogPageInputs() {
  return readdirSync(join(root, 'blog'))
    .filter((file) => file.endsWith('.html') && file !== 'index.html' && !file.startsWith('_'))
    .reduce((inputs, file) => {
      const name = file.replace(/\.html$/, '');
      inputs[`blog/${name}`] = join(root, 'blog', file);
      return inputs;
    }, {});
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        kvkk: resolve(root, 'kvkk.html'),
        gizlilik: resolve(root, 'gizlilik.html'),
        blogIndex: resolve(root, 'blog/index.html'),
        ...blogPageInputs(),
      },
    },
  },
});
