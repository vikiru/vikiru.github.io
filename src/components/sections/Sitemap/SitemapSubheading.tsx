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
        'font-medium text-h6 font-heading text-muted-foreground uppercase tracking-wider',
        className,
      )}
    >
      {title}
    </h4>
  );
}
