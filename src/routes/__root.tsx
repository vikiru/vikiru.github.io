/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import type { ReactNode } from 'react';
import indexCss from '../index.css?url';

const metadata = {
  name: 'Visakan Kirubakaran',
  title: 'Visakan Kirubakaran | Portfolio',
  description:
    'Personal portfolio of Visakan Kirubakaran, a software developer with a passion for software and web development, based in Ottawa, ON.',
};

// Meta tags are handled in individual route files (index, sitemap, projects/$slug, education/courses)

export const Route = createRootRoute({
  ssr: false,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: metadata.description },
      { name: 'author', content: metadata.name },
      { name: 'theme-color', content: '#f8fafc' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: metadata.title },
      { property: 'og:description', content: metadata.description },
      { name: 'twitter:card', content: 'summary' },
    ],
    scripts: [
      {
        src: 'https://kwesforms.com/v2/kf-script.js',
        defer: true,
        suppressHydrationWarning: true,
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      { rel: 'stylesheet', href: indexCss },
      {
        rel: 'icon',
        href: '/favicon-light.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        href: '/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics
          mode={
            process.env.NODE_ENV === 'production' ? 'production' : 'development'
          }
        />
        <Scripts />
      </body>
    </html>
  );
}
