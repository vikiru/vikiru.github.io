import { FaGraduationCap } from 'react-icons/fa6';
import { educationData } from '@/data/education';
import { cn } from '@/lib/utils';

interface EducationHeaderProps {
  className?: string;
}

export function EducationHeader({ className }: EducationHeaderProps) {
  const {
    degree,
    acronym,
    degreeProgram,
    universityName,
    location,
    enrollmentStart,
    enrollmentEnd,
  } = educationData;

  return (
    <header className={cn('space-y-6 pb-8', className)}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="space-y-6">
          <h1 className="heading-1 text-foreground">Education</h1>
          <div className="space-y-3">
            <h2 className="heading-3 italic text-foreground">
              {degree} - {acronym}, {degreeProgram}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 body-small text-muted-foreground lg:justify-start justify-between">
              <span className="flex items-center gap-2 text-primary font-medium">
                <FaGraduationCap aria-hidden="true" className="text-xl" />
                {universityName}
              </span>
              <span className="hidden lg:block text-muted-foreground/30">
                •
              </span>
              <span>
                {enrollmentStart} - {enrollmentEnd}
              </span>
              <span className="hidden lg:block text-muted-foreground/30">
                •
              </span>
              <span className="hidden lg:block">{location}</span>
            </div>
            <div className="lg:hidden text-muted-foreground body-small">
              {location}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
