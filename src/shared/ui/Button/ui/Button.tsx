import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square = false,
  size = ButtonSize.M,
  disabled,
  ...props
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      className={classNames(styles.button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
