import { createContext } from 'preact';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';

export type Theme = 'light' | 'dark'
const THEME_KEY = 'vite-ui-theme';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (next: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

function canUseDOM() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = THEME_KEY,
}: {
  children: preact.ComponentChildren;
  defaultTheme?: Theme | 'system';
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (!canUseDOM()) {
      return defaultTheme === 'system' ? 'light' : (defaultTheme as Theme);
    }
    try {
      const saved = localStorage.getItem(storageKey) as Theme | null;
      if (saved === 'light' || saved === 'dark') return saved;
      if (defaultTheme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return defaultTheme as Theme;
    } catch {
      return defaultTheme === 'system' ? 'light' : (defaultTheme as Theme);
    }
  });

  useEffect(() => {
    if (!canUseDOM()) return;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch { }
  }, [theme, storageKey]);

  useEffect(() => {
    if (!canUseDOM()) return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey && (e.newValue === 'light' || e.newValue === 'dark'))
        setThemeState(e.newValue);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [storageKey]);

  const setTheme = (next: Theme) => setThemeState(next);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
