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

  // Handle paths that already include hash (e.g., "/#about")
  let finalPath = path;
  let finalHash = hash;

  if (path.includes('#')) {
    const [basePath, hashPart] = path.split('#');
    finalPath = basePath || '/';
    finalHash = hashPart;
  }

  const hasHash = finalHash && finalHash.length > 0;

  const commonClassName = cn(
    'group relative flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3',
    'text-muted-foreground transition-all duration-200',
    'hover:border-primary hover:bg-accent/50 hover:text-primary',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'active:scale-[0.98]',
    className,
  );

  const linkProps = isExternal
    ? { href, rel: 'noopener noreferrer', target: '_blank' }
    : { to: finalPath, ...(hasHash && { hash: finalHash }) };

  // For display, show the full path with hash for internal links
  const displayPath = isExternal
    ? href
    : hasHash
      ? `${finalPath}#${finalHash}`
      : finalPath;

  return isExternal ? (
    <a
      className={commonClassName}
      href={href}
      rel={'noopener noreferrer'}
      target="_blank"
    >
      <span className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
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
    <Link className={commonClassName} {...linkProps}>
      <span className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
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
