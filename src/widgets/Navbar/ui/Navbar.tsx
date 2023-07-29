import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { RoutePath } from 'shared/config/routeConfig';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink to={RoutePath.Main} theme={AppLinkTheme.SECONDARY}>
          {t("Main")}
        </AppLink>
      </div>
    </div>
  );
};
