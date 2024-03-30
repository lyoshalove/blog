import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/get-sidebar-items';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../sidebar-item/sidebar-item';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarItemsList = useSelector(getSidebarItems);
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
        {sidebarItemsList.map((sidebarItem) => {
          return (
            <SidebarItem
              key={sidebarItem.path}
              item={sidebarItem}
              opened={isOpened}
            />
          );
        })}
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
});
