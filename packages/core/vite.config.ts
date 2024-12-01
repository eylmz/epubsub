import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'EPubSub',
      fileName: (format) => `epubsub.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    }
  },
  plugins: [dts()],
});
