import profilePic from '../../assets/profile.jpg';

export function About() {
  return (
    <>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-6">About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
          <div className="avatar mb-6">
            <div className="w-64 rounded-xl">
              <img
                src={profilePic}
                alt="Joshua Holman"
              />
            </div>
          </div>
          <p className="font-bold mb-6">
            I'm a math tutor and fourth year CS student at CSU, Fullerton.
          </p>
        </div>

        <div className="w-full px-6">
          <div className="card bg-base-200 shadow-xl border border-base-300 mb-6">
            <div className="card-body clearfix">
              <h2 className="card-title mb-4">Background</h2>
              <p className="mb-4">
                I first attended college at El Camino Community College in
                Torrance, CA. There I played collegiate tennis and earned two
                associate degrees: Mathematics and General Studies w/ emphpasis in
                Physical Sciences. After five semesters I had fully transferred to
                CSU, Fullerton where I am now, in my final semester. My degree
                will be in CS with a minor in Math. I am a board member of my
                schools ACM chapter where I co-lead one of our open-source
                projects.
              </p>
              <p className="">
                I'm a huge Linux enthusiast (take a look at my{"  "}
                <a
                  className="link"
                  href="https://github.com/thejolman/.dotfiles"
                >
                  rice
                </a>) and generally into tech. I enjoy self-hosting things on my
                home server, writing code, and optiimizing my workflow. While I
                can't call myself an engineer, I enjoy tinkering with physical
                hardware, and fixing/upgrading devices when I can.
              </p>

              <p className="">
                Besides school and software, I'm interested in literature and
                music, as well as various sports. Some of my favorite authors are
                George R. R. Martin, Vladimir Nabokov, and Sylvia Plath. I've
                played tennis competetively up until recently, and I also enjoy
                golf and snowboarding (although my wallet doesn't).
              </p>

              <p className="">
                Finally, I've been working as an instructor at various Mathnasium
                locations for nearly two years at this point, and I do private
                tutoring as well when the opportunity presents itself.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title">Interests</h2>
                <ul className="space-y-2">
                  <li>• Programming of all kinds</li>
                  <li>• System administration and devops tasks</li>
                  <li>• Math!</li>
                  <li>• Literature and Music</li>
                  <li>• Fitness</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title">Experience</h2>
                <p className="mb-3">
                  I've worked a few different, unrelated jobs. First as a hospital
                  warehouse worker, then (I occassionally still do) as a tennis
                  instructor, and now as a math instructor. The last two positions
                  have largely been jobs where I work with kids, which I enjoy.
                </p>
                <p className="text-sm">
                  See my{" "}
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/joshua-holman-685a39244/"
                  >
                    linkedin
                  </a>{" "}
                  more information.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
