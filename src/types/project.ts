import type { Project } from "@/data/projects";

export type { Project };

export interface ProjectCardProps {
  project: Project;
  className?: string;
}
