import { LuCalendar, LuCode, LuUser } from 'react-icons/lu';
import type { Project } from '@/types/Project';

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="px-4 md:px-10 flex justify-center">
      <div className="max-w-275 w-full">
        <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex items-center gap-3 mb-5">
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center size-8 rounded-lg bg-primary/10 text-primary"
              >
                <LuCode aria-hidden="true" className="size-4.5" />
              </div>
              <h2 className="body-small font-bold uppercase tracking-wider text-muted-foreground">
                Technologies Used
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  className="px-3 py-1.5 rounded-lg body-small font-medium bg-background border border-border text-foreground capitalize"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border bg-muted/20">
            <div className="flex items-center gap-4 p-5 md:px-8">
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center size-10 rounded-lg bg-primary/10 text-primary"
              >
                <LuCalendar aria-hidden="true" className="size-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="body-small font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
                  Timeline
                </span>
                <span className="body-small text-foreground leading-tight uppercase">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 md:px-8">
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center size-10 rounded-lg bg-primary/10 text-primary"
              >
                <LuUser aria-hidden="true" className="size-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="body-small font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
                  Co-Authors
                </span>
                <span className="body-small text-foreground leading-tight">
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
