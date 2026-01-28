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
        'font-medium body-small text-muted-foreground uppercase tracking-wider',
        className,
      )}
    >
      {title}
    </h3>
  );
}
