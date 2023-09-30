import { classNames } from 'shared/lib/classNames';
import styles from './styles.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock = ({ className }: ArticleCodeBlockProps) => {
  return (
    <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
      <h1>Article Code Block</h1>
    </div>
  );
};
