import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/education/courses')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/education/courses"!</div>;
}
