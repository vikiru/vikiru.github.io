import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/pages/Home';

export const Route = createFileRoute('/')({
  ssr: false,
  component: HomePage,
});
