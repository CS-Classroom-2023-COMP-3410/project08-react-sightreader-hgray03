import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs() // This plugin converts CommonJS modules to ES modules where needed.
  ],
  server: {
    port: 5173,
  },
});
