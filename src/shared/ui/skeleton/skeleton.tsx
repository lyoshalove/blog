import { classNames } from 'shared/lib/classNames';
import { CSSProperties } from 'react';
import styles from './styles.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = ({
  className, height, width, border,
}: SkeletonProps) => {
  const inlineStyles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return <div className={classNames(styles.skeleton, {}, [className])} style={inlineStyles} />;
};
