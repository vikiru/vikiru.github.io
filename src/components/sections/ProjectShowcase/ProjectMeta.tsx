import type { Project } from '@/types/Project';

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="px-4 md:px-10 flex justify-center">
      <div className="max-w-[68.75rem] w-full">
        <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex items-center gap-3 mb-5">
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center size-8 rounded-lg bg-primary/10 text-primary"
              >
                <svg
                  className="size-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Technologies Used
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-background border border-border text-foreground"
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
                <svg
                  className="size-[20px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
                  Timeline
                </span>
                <span className="text-sm text-foreground leading-tight">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 md:px-8">
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center size-10 rounded-lg bg-primary/10 text-primary"
              >
                <svg
                  className="size-[20px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
                  Role
                </span>
                <span className="text-sm text-foreground leading-tight">
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
