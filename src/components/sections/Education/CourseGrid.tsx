import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CourseGridProps {
  children: ReactNode;
  className?: string;
}

export function CourseGrid({ children, className }: CourseGridProps) {
  return (
    <section
      className={cn(
        'grid gap-6 lg:gap-8',
        'grid-cols-1 lg:grid-cols-2 4xl:grid-cols-3',
        className,
      )}
    >
      {children}
    </section>
  );
}
