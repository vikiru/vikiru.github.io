import type { ReactNode } from 'react';
import { Separator } from '@/lib/components/ui/separator';
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
    <section className={cn('space-y-6', className)} id={`year-${year}`}>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold border border-primary/20">
          {year}
        </div>
        <h2 className="text-h4 font-bold text-foreground">{title}</h2>
        <Separator className="flex-1" />
      </div>
      {children}
    </section>
  );
}
