import { Link } from '@tanstack/react-router';
import { memo } from 'react';
import { FaBook, FaGithub } from 'react-icons/fa6';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types/Project';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = memo(function ProjectCard(props: ProjectCardProps) {
  const project: Project = props.project;

  return (
    <Card
      className="flex h-full flex-col bg-primary p-6 shadow-md 3xl:p-8 7xl:p-10 9xl:p-20 dark:bg-primary/50"
      id={project.name}
    >
      <CardHeader className="flex flex-row items-start justify-between gap-4 p-0">
        <CardTitle className="text-2xl font-bold text-foreground 3xl:text-3xl 8xl:text-5xl">
          {project.name}
        </CardTitle>
        <div className="flex items-start gap-2 3xl:gap-4">
          {project.githubUrl && (
            <a
              className="text-muted-foreground transition-colors hover:text-accent"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          )}
          {project.documentationUrl && (
            <a
              className="text-muted-foreground transition-colors hover:text-accent"
              href={project.documentationUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaBook />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-2 flex grow p-0">
        <p className="text-base text-muted-foreground 3xl:text-lg 8xl:text-2xl">
          {project.description}
        </p>
      </CardContent>
      <div className="mt-2 flex flex-wrap gap-2 py-2">
        {project.technologiesUsed.map((tech) => (
          <div
            className="rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            key={tech}
          >
            {tech}
          </div>
        ))}
      </div>
      <CardFooter className="mt-2 flex items-start p-0">
        <Link
          className="font-semibold text-accent transition-colors hover:text-accent/80"
          to={project.projectPageUrl}
        >
          Read More <span>→</span>
        </Link>
      </CardFooter>
    </Card>
  );
});

export default ProjectCard;
