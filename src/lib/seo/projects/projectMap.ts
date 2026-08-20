import type { Graph, Thing } from "schema-dts";
import { personId } from "@/config/schema";
import { projectData } from "@/data/projects";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { grocadexGraph } from "@/lib/seo/projects/grocadexSchema";
import { kelbrumGraph } from "@/lib/seo/projects/kelbrumSchema";
import { noterraGraph } from "@/lib/seo/projects/noterraSchema";
import { paleodraGraph } from "@/lib/seo/projects/paleodraSchema";
import { parseumGraph } from "@/lib/seo/projects/parseumSchema";
import { restasaurusGraph } from "@/lib/seo/projects/restasaurusSchema";
import { urvoGraph } from "@/lib/seo/projects/urvoSchema";
import { videoObject } from "@/lib/seo/videoSchema";
import type { Project } from "@/types/Project";

const baseGraphs: Record<string, Graph> = {
  noterra: noterraGraph as Graph,
  paleodra: paleodraGraph as Graph,
  grocadex: grocadexGraph as Graph,
  kelbrum: kelbrumGraph as Graph,
  parseum: parseumGraph as Graph,
  restasaurus: restasaurusGraph as Graph,
  urvo: urvoGraph as Graph,
};

function projectGraph(project: Project): Graph {
  const base = baseGraphs[project.slug.toLowerCase()];
  const nodes: Thing[] = base ? [...(base["@graph"] ?? [])] : ([{ "@id": personId }] as Thing[]);
  nodes.push(
    breadcrumbs([
      { name: "Home", url: "/" },
      { name: "Projects", url: "/#projects" },
      { name: project.name, url: project.projectPageUrl },
    ]),
  );
  if (project.videoPath) {
    nodes.push(videoObject(project));
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}

const projectSchemaMap = new Map<string, Graph>(
  projectData.projects
    .filter((project) => !project.hidden)
    .map((project) => [project.slug.toLowerCase(), projectGraph(project)]),
);

export { projectSchemaMap };
