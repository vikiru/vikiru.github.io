import { createRouter } from '@tanstack/react-router';
import { NotFound } from '@/components/ui/404';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  return createRouter({
    routeTree,
    notFoundMode: 'root',
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
  });
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
