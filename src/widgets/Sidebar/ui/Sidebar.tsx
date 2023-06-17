import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
      className={classNames(
        styles.Sidebar,
        {
          [styles.opened]: isOpened,
        },
        [className],
      )}
    >
      <button type="button" onClick={toggleOpenSidebar}>{t('Toggle')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
