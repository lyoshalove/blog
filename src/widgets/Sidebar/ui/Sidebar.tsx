import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
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
      <button type="button" onClick={toggleOpenSidebar}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
