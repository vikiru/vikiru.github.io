import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'short' | 'full';
}

export function Logo({ className, variant = 'short' }: LogoProps) {
  return (
    <Link className={cn('text-foreground', className)} to="/">
      <h2
        className={cn(
          'font-logo tracking-widest uppercase',
          variant === 'short' ? 'text-3xl md:text-4xl' : 'text-3xl',
        )}
      >
        <span className="text-foreground">
          {variant === 'short' ? 'V' : 'Visa'}
        </span>
        <span className="text-primary">
          {variant === 'short' ? 'K' : 'kan'}
        </span>
      </h2>
    </Link>
  );
}
