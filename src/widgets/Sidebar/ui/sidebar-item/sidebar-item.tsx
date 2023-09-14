import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemsType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './styles.module.scss';

interface SidebarItemProps {
    item: SidebarItemsType
    opened: boolean
}

export const SidebarItem = memo(({ item, opened }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.sidebarItem, { [styles.opened]: opened })}
    >
      <item.Icon />
      <span className={styles.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});
