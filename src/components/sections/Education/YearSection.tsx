import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface YearSectionProps {
  year: number;
  title: string;
  children: ReactNode;
  className?: string;
}

export function YearSection({ year, title, children, className }: YearSectionProps) {
  return (
    <section className={cn("space-y-8", className)} id={`year-${year}`}>
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/15 font-bold text-primary shadow-sm">
          <span className="text-2xl font-bold tracking-tight">{year}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-h3 font-bold tracking-tight text-foreground">{title}</h2>
          <div className="mt-2 h-1 w-24 rounded-full bg-primary/30" />
        </div>
      </div>
      {children}
    </section>
  );
}
