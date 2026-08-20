import type { Project } from '@/types/Project';

interface AccomplishmentsProps {
  project: Project;
}

export function Accomplishments({ project }: AccomplishmentsProps) {
  if (!project.accomplishments || project.accomplishments.length === 0) {
    return null;
  }

  return (
    <section className="flex justify-center px-4 py-20 md:px-10">
      <div className="w-full max-w-8xl">
        <header className="mb-10 text-center">
          <h3 className="mb-3 font-heading text-h3 font-bold tracking-tight text-foreground">Key Accomplishments</h3>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary/30" />
        </header>
        <ul className="list-inside list-disc space-y-4 pl-4 marker:text-primary">
          {project.accomplishments.map((accomplishment) => (
            <li key={`${project.slug}-accomplishment-${accomplishment}`}>
              <span className="body-large leading-relaxed text-muted-foreground">{accomplishment}.</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
