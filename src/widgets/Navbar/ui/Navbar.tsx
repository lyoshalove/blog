import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import { RoutePath } from "shared/config/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Portal } from "shared/ui/Portal";
import { Modal } from "shared/ui/Modal";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleAuthModal = useCallback(
    () => setIsAuthModal((prev) => !prev),
    []
  );

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink to={RoutePath.Main} theme={AppLinkTheme.SECONDARY}>
          {t("Main")}
        </AppLink>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>{t("SignIn")}</Button>
      </div>
      <Portal>
        <Modal isOpened={isAuthModal} onClose={toggleAuthModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          maiores! Harum ipsa hic amet voluptatum ea voluptate sit soluta enim
          neque, deserunt tenetur. Aperiam neque maiores quos ut harum
          excepturi?
        </Modal>
      </Portal>
    </div>
  );
};
