import { useLocation } from "preact-iso";
import { PageLinks } from "../constants/buttons";
import ThemeToggler from "./ThemeToggler";

export function Navbar() {
  const { url } = useLocation();
  return (
    <div className="drawer">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* navbar */}
        <div className="navbar flex items-center justify-between border-b border-primary-content/10 bg-primary text-primary-content shadow-xl">
          <div className="navbar-start gap-1 w-auto lg:w-1/2">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebar-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-primary-content hover:bg-primary-content/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <title>Open navigation menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <h2 className="pl-2 text-xl font-black italic text-primary-content sm:text-2xl">
              Josh Holman
            </h2>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal join gap-1 px-1">
              {PageLinks.map((button) => {
                const isActive = url === button.href;
                return (
                  <li key={button.href}>
                    <a
                      className={`btn join-item border-none ${
                        isActive
                          ? "btn-secondary text-secondary-content"
                          : "btn-ghost text-primary-content/80 hover:bg-primary-content/10 hover:text-primary-content"
                      }`}
                      href={button.href}
                    >
                      {button.content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="navbar-end gap-1 pr-2 w-auto lg:w-1/2 justify-end">
            <ThemeToggler />
          </div>
        </div>
        {/* end navbar */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-secondary p-4 text-secondary-content">
          <div className="mb-4 border-b border-secondary-content/15 p-4">
            <h2 className="text-2xl font-black italic tracking-[0.08em]">
              Josh Holman
            </h2>
            <p className="text-sm text-secondary-content/70">Navigation</p>
          </div>
          {PageLinks.map((button) => (
            <li key={button.href}>
              <a
                className={`btn py-3 text-lg justify-start border-none ${
                  url === button.href
                    ? "btn-accent text-accent-content"
                    : "btn-ghost text-secondary-content hover:bg-secondary-content/10 hover:text-secondary-content"
                }`}
                href={button.href}
                onClick={() => {
                  const drawer = document.getElementById(
                    "sidebar-drawer",
                  ) as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
              >
                {button.content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
