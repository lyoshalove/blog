import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpenSidebar = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        {
          [styles.opened]: isOpened,
        },
        [className],
      )}
    >
      <div className={styles.links}>
        <div>
          <AppLink
            to={RoutePath.Main}
            theme={AppLinkTheme.SECONDARY}
            className={styles.linksItem}
          >
            <HomeIcon />
            <span className={styles.linkText}>{t('Main')}</span>
          </AppLink>
        </div>

        <div>
          <AppLink
            to={RoutePath.About}
            theme={AppLinkTheme.SECONDARY}
            className={styles.linksItem}
          >
            <AboutIcon />
            <span className={styles.linkText}>{t('About')}</span>
          </AppLink>
        </div>
      </div>
      <Button
        onClick={toggleOpenSidebar}
        data-testid="sidebar-toggle"
        className={classNames(styles.openBtn)}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {isOpened ? '<' : '>'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={!isOpened} />
      </div>
    </div>
  );
};
