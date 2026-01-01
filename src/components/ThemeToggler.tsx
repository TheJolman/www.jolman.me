import { useState, useEffect } from 'preact/hooks';
import { themeChange } from 'theme-change';
import { Sun, Moon } from 'lucide-preact';

export function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or default to 'coffee'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'coffee';
    }
    return 'coffee';
  });

  useEffect(() => {
    themeChange(false)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'coffee' ? 'caramellatte' : 'coffee')
  }

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Moon size={18} />
      <input type="checkbox"
        onClick={toggleTheme}
        defaultChecked={false}
        checked={theme === 'caramellatte'}
        className="toggle"
        data-toggle-theme="coffee,caramellatte"
        data-act-class="ACTIVECLASS"
      />
      <Sun size={18} />
    </label>
  )
}
