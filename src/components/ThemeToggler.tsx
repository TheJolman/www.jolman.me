import { useTheme } from '../providers/theme-provider';
import { isDarkTheme, toggleTheme } from '../config/themes';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const isDark = isDarkTheme(theme);

  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm"
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => setTheme(toggleTheme(theme))}
    >
      <span className="inline-flex items-center gap-2">
        <svg aria-hidden viewBox="0 0 24 24" className="size-5">
          <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {isDark ? (
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </>
            )}
          </g>
        </svg>
        <span className="hidden md:inline">{isDark ? 'Dark' : 'Light'}</span>
      </span>
    </button>)
}
