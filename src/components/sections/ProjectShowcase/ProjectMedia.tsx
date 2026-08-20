import type { Project } from "@/types/Project";

interface ProjectMediaProps {
  project: Project;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  return (
    <section className="flex justify-center px-4 py-20 md:px-10">
      <div className="w-full max-w-8xl">
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
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-border bg-muted">
            <p className="body-small text-muted-foreground">No video available</p>
          </div>
        )}
      </div>
    </section>
  );
}
