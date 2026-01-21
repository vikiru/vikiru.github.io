import { Link } from '@tanstack/react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import educationData from '@/data/education';

function UniversityCard() {
  return (
    <Card className="mx-4 bg-primary 10xl:mx-10 dark:bg-primary/50">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-2xl font-bold text-foreground 3xl:text-3xl 8xl:text-5xl">
          {educationData.universityName}
        </CardTitle>
        <p className="text-base text-muted-foreground 3xl:text-xl 8xl:text-3xl">
          {educationData.location}
        </p>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="text-lg italic text-muted-foreground 3xl:text-2xl 8xl:text-4xl">
          {educationData.degree} - {educationData.acronym},{' '}
          {educationData.degreeProgram}
        </p>
        <p className="mt-1 text-base text-muted-foreground 3xl:text-xl 8xl:text-3xl">
          {educationData.enrollmentStart} - {educationData.enrollmentEnd}
        </p>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Link
          className="body-text font-semibold text-accent transition-colors duration-200 hover:text-accent/80"
          to="/education/courses"
        >
          View Courses <span>→</span>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default UniversityCard;
