import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Portal } from 'shared/ui/Portal';
import { LoginModal } from 'features/AuthByUserName';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleAuthModal = useCallback(
    () => setIsAuthModal((prev) => !prev),
    [],
  );

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink to={RoutePath.Main} theme={AppLinkTheme.SECONDARY}>
          {t('Main')}
        </AppLink>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>
          {t('Login')}
        </Button>
      </div>
      <Portal>
        <LoginModal isOpened={isAuthModal} onClose={toggleAuthModal} />
      </Portal>
    </div>
  );
};
