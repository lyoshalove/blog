import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(styles.links)}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
