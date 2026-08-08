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
    <header className={cn('space-y-8 pb-10', className)}>
      <div className="space-y-6">
        <h1 className="text-h1 font-bold font-heading text-foreground tracking-tight">
          Education
        </h1>

        <div className="space-y-5">
          <h2 className="text-h3 font-bold font-heading text-foreground tracking-tight">
            {degree} - {acronym}, {degreeProgram}
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FaGraduationCap
                    aria-hidden="true"
                    className="size-6 text-primary"
                  />
                </div>
                <div>
                  <p className="text-h5 font-semibold font-heading text-foreground">
                    {universityName}
                  </p>
                  <p className="body-base text-muted-foreground font-mono">
                    {enrollmentStart} - {enrollmentEnd}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-border/50 lg:border-t-0 lg:border-l lg:pl-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                  <FaLocationDot
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                </div>
                <div>
                  <p className="body-small text-muted-foreground/60 uppercase tracking-wider font-medium">
                    Location
                  </p>
                  <p className="body-base font-medium font-mono text-foreground">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
