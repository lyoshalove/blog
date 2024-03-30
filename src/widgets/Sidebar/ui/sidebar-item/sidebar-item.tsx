import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemsType } from 'widgets/Sidebar/model/types';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '../../../../entities/User';
import styles from './styles.module.scss';

interface SidebarItemProps {
    item: SidebarItemsType
    opened: boolean
}

export const SidebarItem = memo(({ item, opened }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

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
