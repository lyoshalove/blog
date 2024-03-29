import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Comment } from 'entities/comment/model/types';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import styles from './styles.module.scss';
import { CommentCard } from '../comment-card';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.commentList, {}, [className])}>
        <CommentCard
          isLoading
          className={styles.comment}
        />
        <CommentCard
          isLoading
          className={styles.comment}
        />
        <CommentCard
          isLoading
          className={styles.comment}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
              className={styles.comment}
            />
          ))
          : <Text text={t('commentsNotFound')} />
      }
    </div>
  );
});
