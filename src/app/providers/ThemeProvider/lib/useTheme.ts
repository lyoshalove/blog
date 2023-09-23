import { useContext, useEffect } from 'react';
import { Theme, ThemeContext, localStorageThemeKey } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!theme) return;

    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (!theme) return;

    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    document.body.className = theme;
    localStorage.setItem(localStorageThemeKey, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
