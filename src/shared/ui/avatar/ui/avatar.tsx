import { classNames } from 'shared/lib/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import styles from './styles.module.scss';

interface AvatarProps {
  avatarUrl: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const Avatar = memo(({
  avatarUrl,
  alt = '',
  size = 150,
  className,
}: AvatarProps) => {
  const inlineStyles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      src={avatarUrl}
      alt={alt}
      style={inlineStyles}
    />
  );
});
