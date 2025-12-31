import ProjectCard from '../../components/ProjectCard'

export function Portfolio() {
  const links = [
    {
      href: "https://www.github.com/TheJolman",
      content: "My GitHub",
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
    <div className="max-w-3xl mx-auto flex flex-col mb-6 items-center justify-center">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Professional Portfolio</h1>
      </div>

      <div className="mb-4 join">
        {links.map((link) => (
          <a href={link.href} key={link.href} className="btn btn-neutral join-item">
            {link.content}
          </a>
        ))}
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <ProjectCard
          title="Club Data API: api.acmcsuf.com"
          technologies="Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions"
          sourceLink="https://github.com/acmcsufoss/api.acmcsuf.com"
        >
          <p>
            acm@CSUF's official data layer. Utilized Discord OAuth2 to allow club members with sufficient roles
            in the main discord server to modify or view resources such as events, members, and announcements.
            Repository contains both API server as well a lightweight CLI client useful for querying the
            server and testing the OAuth2 flow.
            <br />
            My role was lead developer: I did and still do plan/create
            the largest changes the project requires. I also delegated tasks to our other developers and
            worked through blockers as they came up. I created our current dev shell and CI pipeline that
            enables supreme reproducability and code quality standards on merge.
            <br />
            Our dev environment is based on Nix + direnv for a declarative and isolated dev shell
            that's lighter than Docker and loads/unloads automatically. Also included is a Nix
            package definition that allows anyone with nix installed to run our app(s) with
            <code className="text-accent"> nix run </code>or by adding our repo to their flake
            inputs. Our CI pipeline of course takes advantage of this as well, ensuring that
            the exact environment that our developers are using is being used in CI as well.
            <br />
            Due to the nature of our constantly changing team of students, I've made documentation
            a core tenent of this project. When it's not immediately obvious why something exists,
            we write docs. Also included are docs that help new developers get started, especially
            since it's a rapidly growing codebase with tools they may have never used before. This
            includes details on using our pre-written fixtures for making test HTTP requests,
            explaining the project structure and where new code might belong, and explaining
            the various systems we take advantage of like our Disocrd OAuth2 middleware layer or
            OpenAPI 2 (Swagger) docs. Speaking of Swagger, this was one of the things we prioritized
            early. It made testing the API and understanding what was there much easier for the
            team. You might be wondering why we're not using OpenAPI 3 docs, and it's becuase
            we're writing our service with Gin. We hope to move to OpenAPI 3 docs at some point
            in the future, but it's currently low priority as Swagger is doing its job pretty well.
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
            <br />
            This was the first collaborative, full-stack web app I've worked on. We were a team of
            three, and while the app wasn't huge, the learning experience was. I had to learn
            Django for this project (which I liked quite a bit) and back-end web dev in general.
            <br />
            This app was originally deployed to PythonAnywhere by Anaconda, but later I containerized
            the app and migrated it to fly.io for its pricing model.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Productivity App: Motion"
          technologies="Go, Docker, Terraform, Postgres, MinIO, React, Tanstack Router"
          sourceLink="https://github.com/tomasohchom/motion"
        >
          <p>
            This was a large full stack, microservice architecture web app written for our senior project.
            I worked exclusively on our Services written with Go + Postgres (sqlc), and containerized with Docker.
            Architecting this project was truly a blast, I learned so much about writing independent
            services that can work together.
            <br />
            The service I spent the most time with was a file upload service intended to be used with
            AWS S3, but ended up using MinIO instead for minimizing cost during development.
            Docker compose proved extremely useful for this service, as we had not only an addional
            MinIO container running with our image, but also a Postgres metadata store. We used this
            since querying a database with a persistent connection is much much more performant
            than sending comparatively slow HTTP requests to MinIO every time you want an update
            on its content.
            <br />
            I wrote comprehensive Terraform IaC for deploying this entire project to AWS, but
            the app is not currently live for cost reasons.
          </p>
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
            and security. Highly customizable, intended to be easy to use for anyone who wants
            to quickly deploy a Mediawiki instance on AWS.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Task Tracker CLI: Terminder"
          technologies="C++, Cereal, Nix, pre-commit, GitHub Actions"
          sourceLink="https://github.com/TheJolman/terminder"
        >
          <p>
            Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string
            matching for easy use. Written with bleeding-edge C++23 since it's a personal project.
            Hello <code className="text-accent">std::print</code> and <code className="text-accent">std::optional</code>!
            <br />
            Uses pre-commit hooks for maintainting code quality that I'm super picky about.
          </p>
        </ProjectCard>
      </div>

      <div className="divider"></div>

      <div className="w-full max-w-md mx-auto min-h-[550px]">
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
