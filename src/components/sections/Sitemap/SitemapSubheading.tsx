import { cn } from '@/lib/utils';

interface SitemapSubheadingProps {
  title: string;
  className?: string;
}

export function SitemapSubheading({ title, className }: SitemapSubheadingProps) {
  return (
    <h4 className={cn('font-heading text-h6 font-medium tracking-wider text-muted-foreground uppercase', className)}>
      {title}
    </h4>
  );
}
