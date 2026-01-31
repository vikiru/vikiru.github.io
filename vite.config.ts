import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { routes } from './src/data/projects';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    // target: 'esnext',
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      spa: {
        enabled: false,
      },
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        autoSubfolderIndex: true,
        crawlLinks: false,
      },
      pages: routes.map((route: string) => ({
        path: route,
        prerender: { enabled: true, outputPath: `${route}.html` },
      })),
      sitemap: {
        enabled: true,
        host: 'https://vikiru.vercel.app',
      },
    }),
    nitro({
      preset: 'node-server',
    }),
    viteReact(),
    tailwindcss(),
  ],
});
