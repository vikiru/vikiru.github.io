import { createFileRoute } from '@tanstack/react-router';
import { CoursesPage } from '@/components/pages/CoursesPage';

export const Route = createFileRoute('/education/courses')({
  ssr: false,
  component: CoursesPage,
});
