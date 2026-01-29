import { FaGraduationCap, FaLocationDot } from 'react-icons/fa6';
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
            <h2 className="heading-5 italic text-foreground">
              {degree} - {acronym}, {degreeProgram}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 body-base text-muted-foreground lg:justify-start justify-between">
              <div className="flex items-center gap-2 text-primary font-medium font-mono">
                <FaGraduationCap
                  aria-hidden="true"
                  className="size-icon-base"
                />
                {universityName}
              </div>
              <span className="hidden lg:block text-muted-foreground/30">
                •
              </span>
              <span className="font-mono">
                {enrollmentStart} - {enrollmentEnd}
              </span>
              <span className="hidden lg:block text-muted-foreground/30">
                •
              </span>
              <div className="flex items-center gap-2 font-medium font-mono">
                <FaLocationDot aria-hidden="true" className="size-icon-base" />
                <span className="hidden lg:block font-mono">{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-medium font-mono lg:hidden">
              <FaLocationDot aria-hidden="true" className="size-icon-base" />
              {location}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
