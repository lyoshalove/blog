import { classNames } from 'shared/lib/classNames';
import styles from './styles.module.scss';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock = ({ className }: ArticleImageBlockProps) => {
  return (
    <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
      <h1>Article Image Block</h1>
    </div>
  );
};
