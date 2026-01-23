import type { Project } from '@/types/Project';

interface AccomplishmentsProps {
  project: Project;
}

export function Accomplishments({ project }: AccomplishmentsProps) {
  if (!project.accomplishments || project.accomplishments.length === 0) {
    return null;
  }

  return (
    <section className="px-4 md:px-10 flex justify-center">
      <div className="max-w-[68.75rem] w-full">
        <h2 className="text-h4 font-bold tracking-tight font-heading text-foreground mb-6">
          Key Accomplishments
        </h2>
        <ul className="list-disc list-inside marker:text-primary space-y-3">
          {project.accomplishments.map((accomplishment, index) => (
            <li key={`${project.slug}-accomplishment-${index}`}>
              <span className="body-large text-muted-foreground leading-relaxed">
                {accomplishment}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
