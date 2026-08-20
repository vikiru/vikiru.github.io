import { LuCalendar, LuCode, LuUser } from "react-icons/lu";
import type { Project } from "@/types/Project";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="flex justify-center px-4 py-20 md:px-10">
      <div className="w-full max-w-8xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted/30">
          <div className="border-b border-border p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <LuCode aria-hidden="true" className="size-4.5" />
              </div>
              <h2 className="font-heading text-h4 font-bold tracking-wider text-muted-foreground uppercase">
                Technologies Used
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologiesUsed.map((tech) => (
                <span
                  className="body-base rounded-xl border border-border bg-background px-4 py-2 font-medium text-foreground"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-border bg-muted/20 md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="flex items-center gap-4 p-6 md:px-8">
              <div
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <LuCalendar aria-hidden="true" className="size-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <h2 className="mb-1 font-heading text-h4 font-bold tracking-wider text-muted-foreground uppercase">
                  Timeline
                </h2>
                <span className="body-base leading-tight text-foreground uppercase">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 md:px-8">
              <div
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <LuUser aria-hidden="true" className="size-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <h2 className="mb-1 font-heading text-h4 font-bold tracking-wider text-muted-foreground uppercase">
                  Co-Authors
                </h2>
                <span className="body-base leading-tight text-foreground">
                  {project.contributors}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
