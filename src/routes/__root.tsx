import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { NotFound } from '@/components/ui/404';
import { siteConfig } from '@/config/site';
import indexCss from '../index.css?url';

const {
  site: { title: siteTitle, description: siteDescription, url: siteUrl },
  author: { name: authorName },
  assets: { ogImage },
} = siteConfig;

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      { name: 'author', content: authorName },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: authorName },
      { property: 'og:image', content: `${siteUrl}${ogImage}` },
      { name: 'twitter:image', content: `${siteUrl}${ogImage}` },
    ],
    links: [
      { rel: 'stylesheet', href: indexCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
