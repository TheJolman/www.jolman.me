import { buttons } from "../../constants/buttons";

export function Home() {
  return (
    <>
      <head>
        <title>Josh Holman - CS Student & Math Tutor</title>
      </head>
      <div className="hero min-h-[calc(100vh-10rem)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              I'm Josh Holman, a software developer
              and tutor. Welcome to my site.
            </p>
            <div className="flex flex-col items-center gap-4">
              {buttons.map((button) => (
                <a
                  href={button.href}
                  className="btn btn-primary btn-wide"
                  key={button.href}
                >
                  {button.content}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
