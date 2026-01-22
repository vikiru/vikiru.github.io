import { createFileRoute } from '@tanstack/react-router';
import CoursesPage from '@/components/sections/Education/CoursesPage';

export const Route = createFileRoute('/education/courses')({
  component: CoursesPage,
});
