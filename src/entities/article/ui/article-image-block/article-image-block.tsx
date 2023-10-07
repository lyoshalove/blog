import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { ArticleBlockImage } from 'entities/article/model/types';
import { Text, TextAlign } from 'shared/ui/Text';
import styles from './styles.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => {
    return (
      <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
        <img src={block.src} alt={block.title} className={styles.image} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  },
);
