import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './styles.module.scss';

interface IconProps {
  clasName?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ Svg, clasName }: IconProps) => {
  return <Svg className={classNames(styles.icon, {}, [clasName])} />;
};
