import { ProjectCard } from '../../components/ProjectCard'

export function Portfolio() {
  const projects = [
    {
      title: "Club Data API: api.acmcsuf.com",
      description:
        "API in development for club to manage data about board members, announcements, and events. Created CI pipeline and branch protection rules to enable safe collaboration with a team.",
      technologies: "Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions",
      githubLink: "https://github.com/acmcsufoss/api.acmcsuf.com",
    },
    {
      title: "Playlist Rating Web App: Dumps or Fire",
      description:
        "Full-stack web application that rates playlists, albums and songs using popularity data from Spotify. Created CI/CD pipeline to enforce code quality and ensure production is up to date.",
      technologies:
        "Django, Python, Bootstrap, Spotify API, fly.io, GitHub Actions, Docker",
      githubLink: "https://github.com/thejolman/dumps-or-fire",
      liveLink: "",
    },
    {
      title: "Task Tracker CLI: Terminder",
      description:
        "Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string matching for easy use.",
      technologies: "C++, Cereal, Nix, pre-commit, GitHub Actions",
      githubLink: "https://github.com/TheJolman/terminder",
      liveLink: "",
    },
    {
      title: "MediaWiki AWS",
      description:
        "Terraform Infrastructure as Code (IaC) for deploying MediaWiki on AWS with proper configuration and security.",
      technologies: "Terraform, AWS",
      githubLink: "https://github.com/TheJolman/mediawiki-aws",
      liveLink: "",
    },
  ];

  const myData = [
    {
      title: "Relevant Coursework",
      content: [
        "Artifical Intelligence",
        "Machine Learning",
        "Data Science",
        "Database Systems",
        "Operating Systems",
      ],
    },
    {
      title: "Technical Interests",
      content: [
        "Programming Languages and Compilers",
        "Linux and Operating Systems",
        "DevOps",
        "System Administration",
      ],
    },
    {
      title: "Technical Skills",
      content: [
        "Python, C/C++, Java, Go, Lua, bash, SQL, Matlab",
        "Django, FastAPI, Python DS/ML libraries",
        "Nix/NixOS, Linux, Docker",
        "GitHub Actions, Vim",
      ],
    },
  ];

  const links = [
    {
      href: "https://www.github.com/TheJolman",
      content: "My Github",
    },
    {
      href: "https://www.linkedin.com/in/joshua-holman-685a39244/",
      content: "My Linkedin",
    },
    {
      href: "/resume",
      content: "My Resume",
    },
  ];

  return (
    <div className="max-w-screend-md mx-auto flex flex-col items-center justify-center mb-6">
      <div className="flex justify-center my-4 gap-4">
        {links.map((link) => (
          <a href={link.href} key={link.href} className="btn btn-primary">
            {link.content}
          </a>
        ))}
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      <div className="w-full max-w-md mx-auto mb-10">
        {myData.map((category, index) => (
          <div
            key={category.title}
            className="collapse collapse-arrow bg-base-200 border border-base-300"
          >
            <input
              type="radio"
              name="my-accordian-2"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold">{category.title}</div>
            <div className="collapse-content text-md ml-4">
              <div className="min-h-40">
                <ul>
                  {category.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
