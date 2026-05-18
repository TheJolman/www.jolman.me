import type { ComponentChildren } from "preact";
import Card from "./Card";

interface ProjectCardProps {
  title: string;
  technologies: string;
  liveLink?: string;
  sourceLink?: string;
  children?: ComponentChildren;
}

export default function ProjectCard({
  title,
  technologies,
  liveLink,
  sourceLink,
  children,
}: ProjectCardProps) {
  return (
    <Card title={title}>
      {children}
      <p className="mt-4 border-t border-base-300 pt-4 text-sm font-medium text-accent">
        {technologies}
      </p>

      <div className="card-actions justify-end mt-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="btn btn-accent"
            rel="noopener"
          >
            🌐 Visit Site
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            className="btn btn-secondary"
            rel="noopener"
          >
            📁 GitHub
          </a>
        )}
      </div>
    </Card>
  );
}
