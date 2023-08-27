import { classNames } from "shared/lib/classNames";
import { Modal } from "shared/ui/Modal";
import styles from "./styles.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  className,
  isOpened,
  onClose,
}: LoginModalProps) => {
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpened={isOpened}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
