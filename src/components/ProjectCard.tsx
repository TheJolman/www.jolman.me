import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveLink?: string;
  sourceLink?: string;
}

export default function ProjectCard(
  { title, description, technologies, liveLink, sourceLink }: ProjectCardProps,
) {
  return (
    <Card title={title}>
      <p>{description}</p>
      <p className="text-sm italic text-base-content/70">{technologies}</p>

      <div className="card-actions justify-end mt-4">
        {liveLink && (
          <a href={liveLink} className="btn btn-secondary">
            🌐 Visit Site
          </a>
        )}
        {sourceLink &&
          (<a href={sourceLink} className="btn btn-primary">
          📁 GitHub
        </a>
        )}
      </div>
    </Card>


  )
}
