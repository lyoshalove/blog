import { classNames } from 'shared/lib/classNames';
import styles from './styles.module.scss';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock = ({ className }: ArticleTextBlockProps) => {
  return (
    <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
      <h1>Article Text Block</h1>
    </div>
  );
};
