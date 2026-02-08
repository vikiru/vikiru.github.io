import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tanstack/react-start',
      '@tanstack/react-router',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-dialog',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-progress',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
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
      pages: [
        {
          path: '/',
          prerender: { enabled: true, outputPath: 'index.html' },
        },
        {
          path: '/sitemap',
          prerender: { enabled: true, outputPath: 'sitemap/index.html' },
        },
        {
          path: '/education/courses',
          prerender: {
            enabled: true,
            outputPath: 'education/courses/index.html',
          },
        },
        {
          path: '/projects/Noterra',
          prerender: {
            enabled: true,
            outputPath: 'projects/Noterra/index.html',
          },
        },
        {
          path: '/projects/Paleodra',
          prerender: {
            enabled: true,
            outputPath: 'projects/Paleodra/index.html',
          },
        },
        {
          path: '/projects/Grocadex',
          prerender: {
            enabled: true,
            outputPath: 'projects/Grocadex/index.html',
          },
        },
        {
          path: '/projects/Kelbrum',
          prerender: {
            enabled: true,
            outputPath: 'projects/Kelbrum/index.html',
          },
        },
        {
          path: '/projects/Parseum',
          prerender: {
            enabled: true,
            outputPath: 'projects/Parseum/index.html',
          },
        },
        {
          path: '/projects/RESTasaurus',
          prerender: {
            enabled: true,
            outputPath: 'projects/RESTasaurus/index.html',
          },
        },
        {
          path: '/projects/Urvo',
          prerender: { enabled: true, outputPath: 'projects/Urvo/index.html' },
        },
        {
          path: '/projects/CodeSmell',
          prerender: {
            enabled: true,
            outputPath: 'projects/CodeSmell/index.html',
          },
        },
        {
          path: '/projects/discrete-sim',
          prerender: {
            enabled: true,
            outputPath: 'projects/discrete-sim/index.html',
          },
        },
        {
          path: '/projects/Mini-SurveyMonkey',
          prerender: {
            enabled: true,
            outputPath: 'projects/Mini-SurveyMonkey/index.html',
          },
        },
        {
          path: '/projects/Elevator-Simulator',
          prerender: {
            enabled: true,
            outputPath: 'projects/Elevator-Simulator/index.html',
          },
        },
        {
          path: '/projects/digitalRisk',
          prerender: {
            enabled: true,
            outputPath: 'projects/digitalRisk/index.html',
          },
        },
      ],
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
