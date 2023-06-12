import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

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
        [className]
      )}
    >
      <button onClick={toggleOpenSidebar}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
