import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/sections/Home';

export const Route = createFileRoute('/')({
  component: HomePage,
});
