/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import type { ReactNode } from 'react';
import type { Graph } from 'schema-dts';
import { projectData } from '@/data/projects';
import { projectSchemaMap } from '@/lib/seo/projects/projectMap';
import indexCss from '../index.css?url';

const metadata = {
  name: 'Visakan Kirubakaran',
  title: 'Visakan Kirubakaran | Portfolio',
  description:
    'Personal portfolio of Visakan Kirubakaran, a software developer with a passion for software and web development, based in Ottawa, ON.',
};

export const Route = createRootRoute({
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
      {
        name: 'google-site-verification',
        content: 'IUtO6lgG_1nRbIW_MH3yuRA2zNja2RObwx6Bb7fSG3c',
      },
    ],
    scripts: [],
    links: [
      { rel: 'stylesheet', href: indexCss },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/Raleway-VariableFont_wght.woff2',
        crossOrigin: '',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/Lato-Regular.woff2',
        crossOrigin: '',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/Lato-Bold.woff2',
        crossOrigin: '',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/Cinzel-VariableFont_wght.woff2',
        crossOrigin: '',
      },
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
  const location = useLocation();
  const pathname = location.pathname;
  const isProjectPage = pathname.startsWith('/projects/');
  const slug = isProjectPage ? pathname.split('/')[2] : null;
  let projectGraphSchema: Graph | undefined;

  if (isProjectPage && slug) {
    const project = projectData.projects.find(
      (p) => p.slug.toLowerCase() === slug.toLowerCase(),
    );
    if (project) {
      projectGraphSchema = projectSchemaMap.get(project.slug.toLowerCase());
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {projectGraphSchema && (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectGraphSchema),
            }}
            type="application/ld+json"
          />
        )}
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
