import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), eslint()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, mode === 'cv' ? 'cv.html' : 'index.html'),
    },
    outDir: 'build',
    emptyOutDir: mode === 'cv',
  },
}));
