import type { Project } from '@/types/Project';

interface AccomplishmentsProps {
  project: Project;
}

export function Accomplishments({ project }: AccomplishmentsProps) {
  if (!project.accomplishments || project.accomplishments.length === 0) {
    return null;
  }

  return (
    <section className="px-4 md:px-10 flex justify-center py-20">
      <div className="w-full max-w-8xl">
        <header className="text-center mb-10">
          <h3 className="text-h3 font-bold tracking-tight font-heading text-foreground mb-3">
            Key Accomplishments
          </h3>
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
        </header>
        <ul className="list-disc list-inside marker:text-primary space-y-4 pl-4">
          {project.accomplishments.map((accomplishment) => (
            <li key={`${project.slug}-accomplishment-${accomplishment}`}>
              <span className="body-large text-muted-foreground leading-relaxed">
                {accomplishment}.
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
