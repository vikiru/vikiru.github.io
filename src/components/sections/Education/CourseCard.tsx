import { Badge } from '@/lib/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  courseCode: string;
  name: string;
  description: string;
  className?: string;
}

export function CourseCard({
  courseCode,
  name,
  description,
  className,
}: CourseCardProps) {
  return (
    <Card
      aria-label={name}
      className={cn('bg-card border-border flex flex-col h-full', className)}
      role="article"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-h4 font-bold font-heading text-card-foreground leading-tight">
            {name}
          </CardTitle>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono font-medium border border-primary/20">
            {courseCode}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <p className="body-large text-card-foreground/80 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
