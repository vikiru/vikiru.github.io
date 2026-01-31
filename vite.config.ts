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
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      prerender: {
        enabled: process.env.NODE_ENV === 'production',
        autoStaticPathsDiscovery: true,
        autoSubfolderIndex: true,
        crawlLinks: false,
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
    nitro(),
    tailwindcss(),
  ],
});
