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
      className={cn(
        'bg-card border-border transition-all duration-200 motion-reduce:transition-none',
        'hover:border-primary hover:shadow-md',
        'flex flex-col h-full',
        className,
      )}
      role="article"
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-h4 font-heading leading-tight text-card-foreground md:min-h-14">
            {name}
          </CardTitle>
        </div>
        <Badge className="mt-2 font-mono body-small w-fit" variant="secondary">
          {courseCode}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <p className="body-small text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
