import { Link } from "@tanstack/react-router";
import { LuArrowRight, LuAward, LuLink, LuSchool } from "react-icons/lu";
import { educationData } from "@/data/education";
import { Card, CardContent } from "@/lib/components/ui/card";
import { cn } from "@/lib/utils";

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
    <section className={cn("scroll-mt-20 py-20", className)} id="education">
      <div className="px-6">
        <div className="mb-12">
          <h2 className="mb-4 flex items-center gap-3 font-heading text-h3 font-bold sm:text-h2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            Education
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="transition-all duration-300 hover:border-primary/30 motion-reduce:transition-none">
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-lg bg-primary/20 p-3 text-primary">
                  <LuSchool aria-hidden="true" className="text-h3" />
                </div>
                <span className="body-small rounded-full border border-border px-3 py-1 font-mono text-muted-foreground">
                  {enrollmentStart} - {enrollmentEnd}
                </span>
              </div>
              <h3 className="mb-2 text-h4 font-bold text-foreground sm:text-h3">
                {universityName}
              </h3>
              <p className="body-large mb-8 grow leading-relaxed text-muted-foreground italic">
                {degree} - {acronym}, {degreeProgram}
              </p>
              <div className="mt-auto border-t border-border pt-6">
                <Link
                  className="group/link body-large inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary motion-reduce:transition-none"
                  to="/education/courses"
                >
                  View Courses
                  <LuArrowRight
                    aria-hidden="true"
                    className="text-sm transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:border-primary/30 motion-reduce:transition-none">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <LuAward aria-hidden="true" className="text-h3" />
                </div>
                <span className="body-small rounded-full border border-border px-3 py-1 font-mono text-muted-foreground">
                  2023
                </span>
              </div>
              <h3 className="mb-2 text-h4 font-bold text-foreground sm:text-h3">Certificates</h3>
              <p className="mb-6 text-h5 font-medium text-muted-foreground">Coursera</p>
              <ul className="space-y-4 text-muted-foreground">
                {certificates.map((cert) => (
                  <li className="group cursor-pointer" key={cert.certificationName}>
                    <a
                      aria-label={`View certificate for ${cert.certificationName}`}
                      className="flex items-center gap-3 border-b border-border pb-4 transition-colors last:border-0 last:pb-0 hover:text-primary motion-reduce:transition-none"
                      href={cert.certificateLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="body-large">{cert.certificationName}</span>
                      <span className="ml-auto rounded-full p-3 text-muted-foreground transition-colors group-hover:text-primary motion-reduce:transition-none lg:p-5">
                        <LuLink aria-hidden="true" className="block size-icon-base" />
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
