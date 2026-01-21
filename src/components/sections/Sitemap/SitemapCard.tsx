import { createElement } from 'react';
import { cn } from '@/lib/utils';

interface SitemapCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  path: string;
  label?: string;
  className?: string;
}

export function SitemapCard({
  href,
  icon,
  title,
  path,
  label,
  className,
}: SitemapCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className={cn(
        'group relative flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3',
        'text-muted-foreground transition-all duration-200',
        'hover:border-primary hover:bg-accent/50 hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:scale-[0.98]',
        className,
      )}
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      <span className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate text-sm xs:text-base">
          {title}
        </p>
        <p className="font-mono text-xs text-muted-foreground truncate mt-0.5">
          {label || path}
        </p>
      </div>
    </a>
  );
}
