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
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-sm italic text-base-content/70">{technologies}</p>

        <div className="card-actions justify-end mt-4">
          {liveLink && (
            <a href={liveLink} className="btn btn-secondary">
              🌐 Live Demo
            </a>
          )

          }
          <a href={githubLink} className="btn btn-primary">
            📁 GitHub
          </a>
        </div>

      </div>

    </div>

  )
}
