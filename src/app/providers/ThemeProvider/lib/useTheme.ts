import { useContext } from 'react';
import { Theme, ThemeContext, localStorageThemeKey } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(localStorageThemeKey, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
