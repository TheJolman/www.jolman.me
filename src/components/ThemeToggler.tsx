import { Sun, Moon } from 'lucide-preact';
import { useTheme } from '../providers/theme-provider';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'coffee';

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Moon size={18} />
      <input type="checkbox"
        onClick={() => setTheme(isDark ? 'caramellatte' : 'coffee')}
        defaultChecked={false}
        checked={isDark}
        className="toggle"
        data-toggle-theme="coffee,caramellatte"
        data-act-class="ACTIVECLASS"
      />
      <Sun size={18} />
    </label>
  )
}
