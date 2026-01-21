/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import indexCss from '../index.css?url';

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div className="container-custom py-12 text-center">
      <h1 className="heading-1">404 - Not Found</h1>
      <p className="body-base mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
    </div>
  ),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Visakan Kirubakaran' },
    ],
    links: [{ rel: 'stylesheet', href: indexCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
