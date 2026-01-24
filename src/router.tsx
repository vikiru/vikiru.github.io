import { createRouter } from '@tanstack/react-router';
import { NotFound } from '@/components/ui/404';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  const router = createRouter({
    routeTree,
    notFoundMode: 'root',
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
    defaultPreload: 'intent',
  });
  return router;
}
