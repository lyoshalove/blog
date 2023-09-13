import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Portal } from 'shared/ui/Portal';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const toggleAuthModal = useCallback(
    () => setIsAuthModal((prev) => !prev),
    [],
  );

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <div className={classNames(styles.links)}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('Logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>
          {t('Login')}
        </Button>
      </div>
      <Portal>
        {isAuthModal && <LoginModal isOpened={isAuthModal} onClose={toggleAuthModal} />}
      </Portal>
    </div>
  );
};
