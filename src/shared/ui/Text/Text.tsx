import { classNames } from 'shared/lib/classNames';
import styles from './styles.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  return (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
      ])}
    >
      {title && <p className={classNames(styles.title)}>{title}</p>}
      {text && <p className={classNames(styles.text)}>{text}</p>}
    </div>
  );
};