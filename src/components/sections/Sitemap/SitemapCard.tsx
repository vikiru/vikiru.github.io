import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

interface SitemapCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  path: string;
  hash?: string;
  label?: string;
  className?: string;
}

export function SitemapCard({
  href,
  icon,
  title,
  path,
  hash,
  label,
  className,
}: SitemapCardProps) {
  const isExternal = href.startsWith('http');

  const commonClassName = cn(
    'group relative flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3',
    'text-muted-foreground transition-all duration-200 motion-reduce:transition-none',
    'hover:border-primary hover:bg-accent/50 hover:text-primary',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'active:scale-[0.98]',
    className,
  );

  const linkProps = isExternal
    ? { href, rel: 'noopener noreferrer', target: '_blank' }
    : { to: path, ...(hash && { hash }) };

  const displayPath = isExternal ? href : hash ? `${path}#${hash}` : path;

  return isExternal ? (
    <a
      aria-label={`Visit ${title}`}
      className={commonClassName}
      href={href}
      rel={'noopener noreferrer'}
      target="_blank"
    >
      <span className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate text-sm">{title}</p>
        <p className="font-mono text-xs text-muted-foreground truncate mt-0.5">
          {label || displayPath}
        </p>
      </div>
    </a>
  ) : (
    <Link aria-label={title} className={commonClassName} {...linkProps}>
      <span className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate text-sm">{title}</p>
        <p className="font-mono text-xs text-muted-foreground truncate mt-0.5">
          {label || displayPath}
        </p>
      </div>
    </Link>
  );
}
