import { createElement } from 'react';
import { cn } from '@/lib/utils';

interface SitemapSubheadingProps {
  title: string;
  className?: string;
}

export function SitemapSubheading({
  title,
  className,
}: SitemapSubheadingProps) {
  return (
    <h3
      className={cn(
        'font-medium text-sm text-muted-foreground uppercase tracking-wider',
        className,
      )}
    >
      {title}
    </h3>
  );
}
