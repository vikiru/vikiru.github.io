import type { VideoObject } from "schema-dts";
import { siteConfig } from "@/config/site";
import type { Project } from "@/types/Project";

const {
  site: { url: siteUrl },
} = siteConfig;

export function videoObject(project: Project): VideoObject {
  return {
    "@type": "VideoObject",
    name: project.name,
    description: project.description,
    contentUrl: `${siteUrl}${project.videoPath}`,
    url: `${siteUrl}${project.projectPageUrl}`,
  };
}
