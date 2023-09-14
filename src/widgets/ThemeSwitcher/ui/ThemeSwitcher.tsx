import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarktThemeIcon from 'shared/assets/icons/theme-dark.svg';

import { Button } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarktThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
});
