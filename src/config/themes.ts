/**
 * Centralized theme configuration for DaisyUI themes.
 * Change these values to experiment with different DaisyUI themes.
 */
export const THEMES = {
  dark: 'coffee',
  light: 'caramellatte',
} as const;

export type Theme = typeof THEMES.dark | typeof THEMES.light;

export const isValidTheme = (value: unknown): value is Theme => {
  return value === THEMES.dark || value === THEMES.light;
};

export const isDarkTheme = (theme: Theme): boolean => {
  return theme === THEMES.dark;
};

export const toggleTheme = (currentTheme: Theme): Theme => {
  return isDarkTheme(currentTheme) ? THEMES.light : THEMES.dark;
};
