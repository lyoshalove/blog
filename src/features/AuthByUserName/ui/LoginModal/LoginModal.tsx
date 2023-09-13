import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
