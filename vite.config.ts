import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { routes } from './src/data/projects';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      prerender: {
        enabled: false,
        autoStaticPathsDiscovery: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
      },
      pages: routes.map((route: string) => ({
        path: route,
        prerender: { enabled: true, outputPath: `/projects/${route}.html` },
      })),
      sitemap: {
        enabled: true,
        host: 'https://vikiru.vercel.app',
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
