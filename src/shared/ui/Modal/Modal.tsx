import { classNames } from "shared/lib/classNames";
import styles from "./styles.module.scss";
import {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "../Portal";

interface ModalProps extends PropsWithChildren<unknown> {
  className?: string;
  isOpened?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  isOpened,
  onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [styles.opened]: isOpened,
    [styles.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      console.log("SNUS");
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
