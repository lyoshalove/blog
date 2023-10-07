import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { ArticleBlockCode } from 'entities/article/model/types';
import { Code } from 'shared/ui/code';
import styles from './styles.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => {
  return (
    <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
