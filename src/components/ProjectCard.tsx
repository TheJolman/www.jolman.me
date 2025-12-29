import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveLink?: string;
  githubLink: string;
}

export default function ProjectCard(
  { title, description, technologies, liveLink, githubLink }: ProjectCardProps,
) {
  return (
    <Card title={title}>
      <p>{description}</p>
      <p className="text-sm italic text-base-content/70">{technologies}</p>

      <div className="card-actions justify-end mt-4">
        {liveLink && (
          <a href={liveLink} className="btn btn-secondary">
            🌐 Live Demo
          </a>
        )}
        <a href={githubLink} className="btn btn-primary">
          📁 GitHub
        </a>
      </div>
    </Card>


  )
}
