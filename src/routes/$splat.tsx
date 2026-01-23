import { createFileRoute, notFound, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/$splat')({
  ssr: false,
  loader: ({ params }) => {
    // Handle hash navigation URLs like "/#about"
    if (
      params.splat &&
      typeof params.splat === 'string' &&
      params.splat.startsWith('#')
    ) {
      throw redirect({ to: '/', hash: params.splat.slice(1), replace: true });
    }
    throw notFound();
  },
});
