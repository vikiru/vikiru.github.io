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
    <h4
      className={cn(
        'font-medium heading-6 text-muted-foreground uppercase tracking-wider',
        className,
      )}
    >
      {title}
    </h4>
  );
}
