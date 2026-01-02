import { PageLinks } from "../constants/buttons";
import ThemeToggler from "./ThemeToggler";

export function Navbar() {
  return (
    <div className="drawer">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        {/* navbar */}
        <div className="navbar bg-neutral text-neutral-content shadow-xl">
          <div className="navbar-start gap-1">
            <div className="flex-none lg:hidden">
              <label htmlFor="sidebar-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <a href="/" className="btn btn-ghost text-xl">
              Josh Holman
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 join">
              {PageLinks.map((button) => (
                <li key={button.href}>
                  <a className="btn btn-ghost join-item" href={button.href}>{button.content}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end gap-1">
            <ThemeToggler />
          </div>
        </div>
        {/* end navbar */}

      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <div className="mb-4 p-4 border-b border-base-300">
            <h2 className="text-2xl font-bold">Josh Holman</h2>
            <p className="text-sm opacity-70">Navigation</p>
          </div>
          {PageLinks.map((button) => (
            <li key={button.href}>
              <a
                className="text-lg py-3 btn btn-ghost join-item"
                href={button.href}
                onClick={() => {
                  const drawer = document.getElementById('sidebar-drawer') as HTMLInputElement;
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
