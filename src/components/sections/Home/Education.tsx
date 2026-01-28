import { Link } from '@tanstack/react-router';
import { LuArrowRight, LuAward, LuLink, LuSchool } from 'react-icons/lu';
import { educationData } from '@/data/education';
import { Card, CardContent } from '@/lib/components/ui/card';
import { cn } from '@/lib/utils';

interface EducationProps {
  className?: string;
}

export function Education({ className }: EducationProps) {
  const {
    degree,
    acronym,
    degreeProgram,
    universityName,
    enrollmentStart,
    enrollmentEnd,
    certificates,
  } = educationData;

  return (
    <section className={cn('py-20', className)} id="education">
      <div className="px-6">
        <div className="mb-12">
          <h2 className="xs:text-h3 sm:text-h2 font-bold mb-4 flex items-center gap-3 font-heading">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Education
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <Card className="hover:border-primary/30 transition-all duration-300 motion-reduce:transition-none">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <LuSchool aria-hidden="true" className="text-h3" />
                </div>
                <span className="body-small font-mono text-muted-foreground border border-border px-3 py-1 rounded-full">
                  {enrollmentStart} - {enrollmentEnd}
                </span>
              </div>
              <h3 className="xs:text-h4 sm:text-h3 font-bold text-foreground mb-2">
                {universityName}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 grow italic body-large">
                {degree} - {acronym}, {degreeProgram}
              </p>
              <div className="mt-auto pt-6 border-t border-border">
                <Link
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group/link xs:body-small md:body-base font-medium motion-reduce:transition-none"
                  to="/education/courses"
                >
                  View Courses
                  <LuArrowRight
                    aria-hidden="true"
                    className="text-sm group-hover/link:translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-all duration-300 motion-reduce:transition-none">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <LuAward aria-hidden="true" className="text-h3" />
                </div>
                <span className="body-small font-mono text-muted-foreground border border-border px-3 py-1 rounded-full">
                  2023
                </span>
              </div>
              <h3 className="xs:text-h4 sm:text-h3 font-bold text-foreground mb-2">
                Certificates
              </h3>
              <h4 className="text-h5 mb-6 text-muted-foreground">Coursera</h4>
              <ul className="space-y-4 text-muted-foreground">
                {certificates.map((cert) => (
                  <li
                    className="group cursor-pointer"
                    key={cert.certificationName}
                  >
                    <a
                      className="flex items-center gap-3 pb-4 border-b border-border last:border-0 last:pb-0 hover:text-accent transition-colors motion-reduce:transition-none"
                      href={cert.certificateLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>{cert.certificationName}</span>
                      <span className="ml-auto text-muted-foreground group-hover:text-accent transition-colors p-3 xs:p-4 lg:p-5 rounded-full motion-reduce:transition-none">
                        <LuLink
                          aria-hidden="true"
                          className="size-icon-base block"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
