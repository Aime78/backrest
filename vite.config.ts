import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from '@rollup/plugin-image';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // plugins: [react()],
  // plugins: [tsconfigPaths()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react(), image()],
});
