import type { Project } from '@/types/Project';

interface ProjectMediaProps {
  project: Project;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  return (
    <section className="px-4 md:px-10 flex justify-center pb-16">
      <div className="max-w-275 w-full">
        {project.videoPath ? (
          <video
            aria-label={`Demo video for ${project.name}`}
            className="w-full rounded-2xl border border-border shadow-xl"
            controls
            muted
            playsInline
            preload="metadata"
            src={project.videoPath}
          />
        ) : (
          <div className="w-full aspect-video flex items-center justify-center rounded-2xl border border-border bg-muted">
            <p className="body-small text-muted-foreground">
              No video available
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
