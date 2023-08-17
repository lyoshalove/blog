import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square = false,
  size = ButtonSize.M,
  ...props
}) => {
  const mods: Record<string, boolean> = { [styles.square]: square };

  return (
    <button
      className={classNames(styles.button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
