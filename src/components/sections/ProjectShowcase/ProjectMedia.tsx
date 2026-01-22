import type { Project } from '@/types/Project';

interface ProjectMediaProps {
  project: Project;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  return (
    <section className="px-4 md:px-10 flex justify-center pb-16">
      <div className="max-w-[68.75rem] w-full">
        <div className="w-full aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
          {project.videoPath ? (
            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
              src={project.videoPath}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-sm text-muted-foreground">
                No video available
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
