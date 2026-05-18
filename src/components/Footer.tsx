function ExternalLink({ href, text }) {
  return (
    <a
      href={href}
      className="link link-hover flex items-center gap-0.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
        <path d="M11 13l9 -9" />
        <path d="M15 4h5v5" />
      </svg>
      {text}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer footer-center footer-vertical border-t border-accent-content/10 bg-accent p-6 text-accent-content">
      <aside className="flex flex-col items-center gap-1">
        <p>
          Copyright @ {new Date().getFullYear()} - All rights reserved by Josh
          Holman
        </p>

        <div className="flex gap-3">
          <ExternalLink href={"https://github.com/thejolman/www.jolman.me"} text={"source code"} />
          <ExternalLink href={"https://github.com/TheJolman/www.jolman.me/issues/new"} text={"report a bug"} />
        </div>
      </aside>
    </footer>
  );
}
