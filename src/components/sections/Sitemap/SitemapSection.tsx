import type { ReactNode } from 'react';
import { Separator } from '@/lib/components/ui/separator';
import { cn } from '@/lib/utils';

interface SitemapSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function SitemapSection({
  title,
  children,
  className,
}: SitemapSectionProps) {
  return (
    <section className={cn('space-y-4', className)}>
      <div className="flex items-center gap-3 md:gap-4">
        <h2 className="heading-2 font-semibold text-nav-base tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <Separator className="hidden sm:block" />
        <Separator className="sm:hidden" />
      </div>
      <div className="grid gap-3 md:gap-4">{children}</div>
    </section>
  );
}
