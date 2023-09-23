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

interface TextProps {
  className?: string;
  title?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
}: TextProps) => {
  const mods = {
    [styles[theme]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className, styles[align]])}>
      {title && <p className={classNames(styles.title)}>{title}</p>}
      {text && <p className={classNames(styles.text)}>{text}</p>}
    </div>
  );
});
