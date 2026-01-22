import * as React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import educationData from '@/data/education';
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
    <header className={cn('space-y-6 pb-8 border-b border-border', className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-foreground">
            Education
          </h1>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-medium italic text-foreground">
              {degree} - {acronym}, {degreeProgram}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-muted-foreground">
              <span className="flex items-center gap-2 text-primary font-medium">
                <FaGraduationCap className="text-xl" />
                {universityName}
              </span>
              <span className="hidden sm:block text-muted-foreground/30">
                •
              </span>
              <span>
                {enrollmentStart} - {enrollmentEnd}
              </span>
              <span className="hidden sm:block text-muted-foreground/30">
                •
              </span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
