export function Footer() {
  return (
    <footer className="footer footer-center footer-vertical border-t border-accent-content/10 bg-accent p-6 text-accent-content">
      <aside className="flex flex-col items-center gap-1">
        <p>
          Copyright @ {new Date().getFullYear()} - All rights reserved by Josh
          Holman
        </p>
        <a
          href="https://github.com/thejolman/www.jolman.me"
          className="link link-hover font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </aside>
    </footer>
  );
}
