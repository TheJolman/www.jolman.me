import profilePic from '../../assets/profile.jpg';

export function About() {
  return (
    <>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-6">About Me</h1>
        </div>

        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="avatar flex justify-center md:justify-start">
              <div className="w-80 rounded-xl">
                <img
                  src={profilePic}
                  alt="Josh Holman"
                />
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title">
                  Hi! I'm a Computer Science graduate and tutor from Torrance, California.
                </h2>
                <p>
                  I'm currently looking for work in DevOps, Software Engineering, or other
                  technical field.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border border-base-300 mb-6">
            <div className="card-body flow-root">
              <h2 className="card-title mb-4">Background</h2>
              <p className="mb-4">
                I first attended college at El Camino Community College in
                Torrance, CA. There I played collegiate tennis and earned two
                associate degrees: Mathematics and General Studies w/ emphpasis in
                Physical Sciences. After five semesters I had fully transferred to
                CSU Fullerton where I earned a BS in Computer Science with a minor in Math.
                I was a board member of my schools ACM chapter where I lead one of our open-source
                projects (see api.acmcsuf.com on my <a className="link" href="/portfolio"> portfolio
                </a> for more info). On top of being a lead developer, I created workshops with
                my team and personally lead and demo'd a few in my last semester. Some
                highlights included my personal favorite, the Advanced Git Workshop, our Inro
                to Rust Workshop, and our GitHub Actions Workshop. All of these were designed
                to introduce technologies and tools that would be useful to fellow student
                developers, and to show them how powerful they can be with the problems they're
                designed to solve.
              </p>

              <p className="mb-4">
                I'm a huge Linux enthusiast (take a look at my{" "}
                <a
                  className="link"
                  href="https://github.com/thejolman/.dotfiles"
                >
                  rice
                </a>) and generally into tech. I enjoy self-hosting things on my
                home server, writing code, and optimizing my development workflow. While I
                can't call myself a hardware engineer, I enjoy tinkering with physical
                hardware, and fixing or upgrading devices when I can. My home server functions
                as a file upload and storage server (currently uses SFTP, might add Samba
                support as well) and of course a Minecraft server for my friends and I.
              </p>

              <p className="mb-4">
                Besides school and software, I'm interested in literature and
                music, as well as various sports. Some of my favorite authors are
                George R. R. Martin, Vladimir Nabokov, and Sylvia Plath. I've
                played tennis competetively up until recently, and I also enjoy skateboarding,
                golf, and snowboarding.
              </p>

              <p className="">
                Finally, I've been working as an instructor at various Mathnasium
                locations for nearly two years at this point, and I do private
                tutoring as well when the opportunity presents itself. While not the most
                lucrative of jobs, I truly love it as get to directly help people with
                something that I enjoy. Nothing makes me happier than helping a student
                acheive an 'aha' moment or getting them excited about a subject many see
                as dry. I'm also hoping to start tutoring people in Copmuter Science topics, too.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200 shadow-xl border border-base-300"> {/* left col */}
              <div className="card-body">
                <h2 className="card-title">Interests</h2>
                <ul className="space-y-2">
                  <li>• Programming of all kinds (but mostly server-side stuff)</li>
                  <li>• System administration and DevOps</li>
                  <li>• Math</li>
                  <li>• Reading and Music</li>
                  <li>• Fitness</li>
                  <li>• Helping others 😁</li>
                </ul>
              </div>
            </div> {/* end left col */}

            <div className="card bg-base-200 shadow-xl border border-base-300"> {/* right col */}
              <div className="card-body">
                <h2 className="card-title">Experience</h2>
                <p className="">
                  I've worked a few different, unrelated jobs. First as a hospital
                  warehouse worker, then (I occassionally still do) as a tennis
                  instructor, and now as a math instructor. The last two positions
                  have largely been jobs where I work with kids, which I enjoy.
                  <br /><br />
                  See my{" "}
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/joshua-holman-685a39244/"
                  >
                    linkedin
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </div> {/* end right col */}
          </div>

        </div>
      </div>
    </>
  );
}
