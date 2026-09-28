import { useState } from 'react';

import type { Project } from '@/types/Project';

interface ProjectMediaProps {
  project: Project;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <section className="flex justify-center px-4 py-12 md:px-10 md:py-16">
      <div className="w-full max-w-7xl">
        {project.videoPath && !hasVideoError ? (
          <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-xl">
            <video
              aria-label={`Demo video for ${project.name}`}
              className="aspect-video w-full object-contain"
              controls
              muted
              onError={() => setHasVideoError(true)}
              playsInline
              preload="metadata"
              src={project.videoPath}
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-black px-6 text-center">
            <p className="body-base font-medium text-white">
              {hasVideoError ? 'The project demo is currently unavailable.' : 'No video available for this project.'}
            </p>
            {project.githubUrl && (
              <a
                className="text-sm text-white underline underline-offset-4 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View the source code instead
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
