import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import styles from './styles.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSizes {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSizes;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSizes.M,
}: TextProps) => {
  const mods = {
    [styles[theme]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className, styles[align], styles[size]])}>
      {title && <p className={classNames(styles.title)}>{title}</p>}
      {text && <p className={classNames(styles.text)}>{text}</p>}
    </div>
  );
});
