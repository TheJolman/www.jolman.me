import { PageLinks } from "../constants/buttons";
import ThemeToggler from "./ThemeToggler";

export function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content shadow-xl">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl">
          Josh Holman
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 join">
          {PageLinks.map((button) => (
            <a className="btn btn-ghost join-item" href={button.href}>{button.content}</a>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-1">
        <ThemeToggler />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-1 p-2 shadow bg-accent text-accent-content rounded-box w-52"
          >
            {PageLinks.map((button) => (
              <li key={button.href}>
                <a href={button.href}>{button.content}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
