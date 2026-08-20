import { Badge } from "@/lib/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  courseCode: string;
  name: string;
  description: string;
  className?: string;
}

export function CourseCard({ courseCode, name, description, className }: CourseCardProps) {
  return (
    <Card
      aria-label={name}
      className={cn("bg-card flex h-full flex-col border-border", className)}
      role="article"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-heading text-h5 leading-tight font-bold">{name}</CardTitle>
        </div>
        <Badge className="text-sm font-normal" variant="secondary">
          {courseCode}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <p className="text-card-foreground/80 text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
