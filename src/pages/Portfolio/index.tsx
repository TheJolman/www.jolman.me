import ProjectCard from '../../components/ProjectCard'

export function Portfolio() {
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

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center mb-6">
      <div className="flex justify-center my-4 gap-4">
        {links.map((link) => (
          <a href={link.href} key={link.href} className="btn btn-primary">
            {link.content}
          </a>
        ))}
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-10">
        <ProjectCard
          title="Club Data API: api.acmcsuf.com"
          technologies="Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions"
          sourceLink="https://github.com/acmcsufoss/api.acmcsuf.com"
        >
          <p>
            acm@CSUF's official data layer. Utilized Discord OAuth2 to allow club members with sufficient roles
            in the main discord server to modify or view resources such as events, members, and announcements.
            Repository contains both API server as well a lightweight CLI client useful for querying the
            server and testing the OAuth2 flow. My role was lead developer - I did and still do plan/create
            the largest changes the project requires. I also delegated tasks to our other developers and
            worked through blockers as they came up. I created our current dev shell and CI pipeline that
            enables supreme reproducability and code quality standards on merge.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Playlist Rating Web App: Dumps or Fire"
          technologies="Django, Python, Bootstrap, Spotify API, fly.io, GitHub Actions, Docker"
          sourceLink="https://github.com/thejolman/dumps-or-fire"
        >
          <p>
            Full-stack web application that rates playlists, albums and songs using popularity data from
            Spotify. Created CI/CD pipeline to enforce code quality and ensure production is up to date.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Productivity App: Motion"
          technologies="Go, Docker, Terraform, Postgres, MinIO, React, Tanstack Router"
          sourceLink="https://github.com/tomasohchom/motion"
        >
          <p>asdf</p>
        </ProjectCard>

        <ProjectCard
          title="Home Server"
          technologies="Linux, OpenSUSE, Docker, Caddy, Systemd, Networking, Cloudflare"
          sourceLink="https://github.com/thejolman/homelab"
        >
          <p>
            OpenSUSE Leap 16.0 powered physical server, Intel i7 4790. Runs Pi-Hole DNS server and ad blocker
            for my home network, file upload/storage server, and Minecraft server. The latter two services
            are available over the WAN with properly configured firewall and network traffic security tools
            (e.g., fail2ban). Most services are containerized with docker and all are configured with
            systemd to launch on startup.
          </p>
        </ProjectCard>

        <ProjectCard
          title="MediaWiki AWS"
          technologies="Terraform, AWS"
          sourceLink="https://github.com/TheJolman/mediawiki-aws"
        >
          <p>
            Terraform Infrastructure as Code (IaC) for deploying MediaWiki on AWS with proper configuration
            and security.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Task Tracker CLI: Terminder"
          technologies="C++, Cereal, Nix, pre-commit, GitHub Actions"
          sourceLink="https://github.com/TheJolman/terminder"
        >
          <p>
            Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string
            matching for easy use.
          </p>
        </ProjectCard>
      </div>

      <div className="w-full max-w-md mx-auto mb-10 min-h-[420px]">
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
                <ul style={{ listStyleType: 'circle' }}>
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
