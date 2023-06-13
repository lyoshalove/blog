import { FC } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarktThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarktThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
