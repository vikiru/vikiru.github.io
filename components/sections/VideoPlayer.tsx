import type { Project } from '@/types/Project';

type VideoPlayerProps = {
  project: Project;
};

export default function VideoPlayer({ project }: VideoPlayerProps) {
  return (
    <section className="pb-6 pt-2 7xl:py-12 11xl:py-16" id="project-video">
      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl mb-2">
        Demo
      </h3>
      <div className="mt-4">
        <video
          className="h-full w-full rounded-lg"
          controls
          muted
          preload="auto"
        >
          <source src={project.videoPath} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
