import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import styles from './styles.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      <h1>Articles Page</h1>
    </div>
  );
};

export default memo(ArticlesPage);
