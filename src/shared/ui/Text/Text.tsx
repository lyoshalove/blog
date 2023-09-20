import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import styles from './styles.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  theme?: TextTheme;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => (
  <div
    className={classNames(styles.Text, { [styles[theme]]: true }, [
      className,
    ])}
  >
    {title && <p className={classNames(styles.title)}>{title}</p>}
    {text && <p className={classNames(styles.text)}>{text}</p>}
  </div>
));
