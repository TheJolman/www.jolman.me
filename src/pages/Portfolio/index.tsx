import ProjectCard from '../../components/ProjectCard'

export function Portfolio() {
  const projects = [
    {
      title: "Club Data API: api.acmcsuf.com",
      description: `
acm@CSUF's official data layer. Utilized Discord OAuth2 to allow club members with sufficient roles
in the main discord server to modify or view resources such as events, members, and announcements.
Repository contains both API server as well a lightweight CLI client useful for querying the
server and testing the OAuth2 flow. My role was lead developer - I did and still do plan/create
the largest changes the project requires. I also delegated tasks to our other developers and
worked through blockers as they came up. I created our current dev shell and CI pipeline that
enables supreme reproducability and code quality standards on merge.
`,
      technologies: "Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions",
      githubLink: "https://github.com/acmcsufoss/api.acmcsuf.com",
    },
    {
      title: "Playlist Rating Web App: Dumps or Fire",
      description: `
Full-stack web application that rates playlists, albums and songs using popularity data from
Spotify. Created CI/CD pipeline to enforce code quality and ensure production is up to date.
`,
      technologies:
        "Django, Python, Bootstrap, Spotify API, fly.io, GitHub Actions, Docker",
      githubLink: "https://github.com/thejolman/dumps-or-fire",
      liveLink: "",
    },
    {
      title: "Productivity App: Motion",
      description: `
asdf
`,
      technologies: "Go, Docker, Terraform, Postgres, MinIO, React, Tanstack Router",
      githubLink: "https://github.com/tomasohchom/motion",
    },
    {
      title: "Home Server",
      description: `
OpenSUSE Leap 16.0 powered physical server, Intel i7 4790. Runs Pi-Hole DNS server and ad blocker
for my home network, file upload/storage server, and Minecraft server. The latter two services
are available over the WAN with properly configured firewall and network traffic security tools
(e.g., fail2ban). Most services are containerized with docker and all are configured with
systemd to launch on startup.
`,
      technologies: "Linux, OpenSUSE, Docker, Caddy, Systemd, Networking, Cloudflare",
      githubLink: "https://github.com/thejolman/homelab",
    },
    {
      title: "MediaWiki AWS",
      description: `
Terraform Infrastructure as Code (IaC) for deploying MediaWiki on AWS with proper configuration
and security.
`,
      technologies: "Terraform, AWS",
      githubLink: "https://github.com/TheJolman/mediawiki-aws",
      liveLink: "",
    },
    {
      title: "Task Tracker CLI: Terminder",
      description: `
Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string
matching for easy use.
`,
      technologies: "C++, Cereal, Nix, pre-commit, GitHub Actions",
      githubLink: "https://github.com/TheJolman/terminder",
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
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center mb-6">
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
            sourceLink={project.githubLink}
          />
        ))}
      </div>

      <div className="w-full max-w-md mx-auto mb-10 min-h-[410px]">
        {myData.map((category, index) => (
          <div
            className="collapse collapse-arrow bg-base-200 shadow-200 shadow-xl border border-base-300"
          >
            <input
              type="radio"
              name="portfolio-data-accordian"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold">{category.title}</div>
            <div className="collapse-content ml-4">
              <ul style={{ listStyleType: 'circle' }}>
                {category.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
