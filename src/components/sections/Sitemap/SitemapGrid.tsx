import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SitemapGridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}

export function SitemapGrid({
  children,
  cols = 2,
  className,
}: SitemapGridProps) {
  const gridStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  };

  return (
    <div className={cn('grid gap-3 md:gap-4', gridStyles[cols], className)}>
      {children}
    </div>
  );
}
