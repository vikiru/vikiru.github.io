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
      <div className="flex items-center gap-3 xs:gap-4">
        <h2 className="font-semibold text-base xs:text-lg sm:text-lg tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <Separator className="hidden xs:block" />
        <Separator className="xs:hidden" />
      </div>
      <div className="grid gap-3 xs:gap-4">{children}</div>
    </section>
  );
}
