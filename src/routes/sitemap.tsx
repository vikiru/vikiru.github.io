import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sitemap')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/sitemap"!</div>;
}
