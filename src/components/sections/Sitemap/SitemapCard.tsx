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

export function SitemapCard({ href, icon, title, path, hash, label, className }: SitemapCardProps) {
  const isExternal = href.startsWith('http');

  const commonClassName = cn(
    'group bg-card relative flex items-start gap-3 rounded-lg border border-border px-4 py-3',
    'text-muted-foreground transition-all duration-200 motion-reduce:transition-none',
    'hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg',
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',

    className,
  );

  const linkProps = isExternal
    ? { href, rel: 'noopener noreferrer', target: '_blank' }
    : { to: path, ...(hash && { hash }) };

  const displayPath = isExternal ? href : hash ? `${path}#${hash}` : path;

  return isExternal ? (
    <a className={commonClassName} href={href} rel={'noopener noreferrer'} target="_blank">
      <span
        aria-hidden="true"
        className="mt-2 shrink-0 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none"
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-heading text-h6 font-medium text-foreground sm:text-h5">{title}</h3>
        <p aria-hidden="true" className="body-small mt-0.5 truncate font-mono text-muted-foreground">
          {label || displayPath}
        </p>
      </div>
    </a>
  ) : (
    <Link className={commonClassName} {...linkProps}>
      <span
        aria-hidden="true"
        className="mt-2 shrink-0 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none"
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-heading text-h6 font-medium text-foreground sm:text-h5">{title}</h3>
        <p aria-hidden="true" className="body-small mt-0.5 truncate font-mono text-muted-foreground">
          {label || displayPath}
        </p>
      </div>
    </Link>
  );
}
