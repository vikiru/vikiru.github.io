import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { lastmodFor } from './src/lib/seo/lastmod';

const pageRoutes = [
  '/',
  '/sitemap',
  '/education/courses',
  '/projects/Noterra',
  '/projects/Paleodra',
  '/projects/Grocadex',
  '/projects/Kelbrum',
  '/projects/Parseum',
  '/projects/RESTasaurus',
  '/projects/Urvo',
  '/projects/CodeSmell',
  '/projects/discrete-sim',
  '/projects/Mini-SurveyMonkey',
  '/projects/Elevator-Simulator',
  '/projects/digitalRisk',
];

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tanstack/react-router',
      '@radix-ui/react-dialog',
      '@radix-ui/react-label',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'sonner',
      'zod',
      'schema-dts',
      'react-icons',
      'lucide-react',
      '@vercel/analytics',
      '@vercel/speed-insights',
      'web-vitals',
    ],
  },
  build: {},
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
      pages: pageRoutes.map((pagePath) => ({
        path: pagePath,
        prerender: {
          enabled: true,
          outputPath:
            pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}/index.html`,
        },
        sitemap: { lastmod: lastmodFor(pagePath) },
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
