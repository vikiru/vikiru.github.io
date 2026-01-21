import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Course } from '@/types/Course';

type CourseCardProps = {
  course: Course;
};

const CourseCard = memo(function CourseCard(props: CourseCardProps) {
  const course = props.course;

  return (
    <Card
      className="flex h-full flex-col bg-primary p-6 shadow-md 3xl:p-8 7xl:p-10 9xl:p-20 dark:bg-primary/50"
      id={course.courseCode.toLowerCase()}
    >
      <CardHeader className="flex flex-row items-start justify-between p-0">
        <CardTitle className="text-xl font-bold leading-snug text-foreground 3xl:text-2xl 8xl:text-4xl">
          {course.name}
        </CardTitle>
        <span className="ml-2 text-sm font-medium text-muted-foreground 3xl:text-base 8xl:text-xl">
          {course.courseCode}
        </span>
      </CardHeader>
      <CardContent className="mt-2 flex grow p-0">
        <p className="text-base text-muted-foreground 3xl:text-lg 8xl:text-2xl">
          {course.description}
        </p>
      </CardContent>
    </Card>
  );
});

export default CourseCard;
