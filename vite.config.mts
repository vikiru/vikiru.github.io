import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '~components': path.resolve(__dirname, './src/components'),
      '~types': path.resolve(__dirname, './src/types'),
      '~data': path.resolve(__dirname, './src/assets/data'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~scripts': path.resolve(__dirname, './src/scripts'),
      '~utils': path.resolve(__dirname, './src/utils'),
      '~assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
