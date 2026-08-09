import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          domegallery: ['@use-gesture/react'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2015',
  },
  css: {
    devSourcemap: false,
  },
});
