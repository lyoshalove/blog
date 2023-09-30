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

    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = theme;
    localStorage.setItem(localStorageThemeKey, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
