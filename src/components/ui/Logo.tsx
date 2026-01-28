import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'short' | 'full';
}

export function Logo({ className, variant = 'short' }: LogoProps) {
  return (
    <Link className={cn('text-foreground', className)} to="/">
      <div
        className={cn(
          'font-logo tracking-widest uppercase',
          variant === 'short' ? 'text-logo-base' : 'text-logo-lg',
        )}
      >
        <span className="text-foreground">
          {variant === 'short' ? 'V' : 'Visa'}
        </span>
        <span className="text-primary">
          {variant === 'short' ? 'K' : 'kan'}
        </span>
      </div>
    </Link>
  );
}
