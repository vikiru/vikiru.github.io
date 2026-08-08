import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface YearSectionProps {
  year: number;
  title: string;
  children: ReactNode;
  className?: string;
}

export function YearSection({
  year,
  title,
  children,
  className,
}: YearSectionProps) {
  return (
    <section className={cn('space-y-8', className)} id={`year-${year}`}>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-primary font-bold border-2 border-primary/30 shadow-sm">
          <span className="text-2xl font-bold tracking-tight">{year}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-h3 font-bold font-heading text-foreground tracking-tight">
            {title}
          </h2>
          <div className="mt-2 h-1 w-24 bg-primary/30 rounded-full" />
        </div>
      </div>
      {children}
    </section>
  );
}
