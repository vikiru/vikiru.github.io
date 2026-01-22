import * as React from 'react';
import { cn } from '@/lib/utils';

interface CourseGridProps {
  children: React.ReactNode;
  className?: string;
}

export function CourseGrid({ children, className }: CourseGridProps) {
  return (
    <div
      className={cn(
        'grid gap-4',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
}
