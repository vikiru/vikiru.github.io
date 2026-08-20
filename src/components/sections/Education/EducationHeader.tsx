import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { educationData } from "@/data/education";
import { cn } from "@/lib/utils";

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
    <header className={cn("space-y-8 pb-10", className)}>
      <div className="space-y-6">
        <h1 className="font-heading text-h1 font-bold tracking-tight text-foreground">Education</h1>

        <div className="space-y-5">
          <h2 className="font-heading text-h3 font-bold tracking-tight text-foreground">
            {degree} - {acronym}, {degreeProgram}
          </h2>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <FaGraduationCap aria-hidden="true" className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-h5 font-semibold text-foreground">
                    {universityName}
                  </p>
                  <p className="body-base font-mono text-muted-foreground">
                    {enrollmentStart} - {enrollmentEnd}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border/50 pt-2 lg:border-t-0 lg:border-l lg:pl-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted/50">
                  <FaLocationDot aria-hidden="true" className="size-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="body-small font-medium tracking-wider text-muted-foreground/60 uppercase">
                    Location
                  </p>
                  <p className="body-base font-mono font-medium text-foreground">{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
