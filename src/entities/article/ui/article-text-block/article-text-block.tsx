import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { ArticleBlockText } from '../../model/types';
import styles from './styles.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleBlockText;
}

export const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => {
  return (
    <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph) => {
        return (
          <Text key={paragraph} text={paragraph} className={styles.paragraph} />
        );
      })}
    </div>
  );
});
