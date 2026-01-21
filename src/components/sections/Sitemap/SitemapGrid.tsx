import * as React from 'react';
import { cn } from '@/lib/utils';

interface SitemapGridProps {
  children: React.ReactNode;
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
    2: 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    3: 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  };

  return (
    <div className={cn('grid gap-3 xs:gap-4', gridStyles[cols], className)}>
      {children}
    </div>
  );
}
