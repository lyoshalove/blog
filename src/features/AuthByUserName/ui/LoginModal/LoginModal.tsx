import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  className,
  isOpened,
  onClose,
}: LoginModalProps) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpened={isOpened}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
