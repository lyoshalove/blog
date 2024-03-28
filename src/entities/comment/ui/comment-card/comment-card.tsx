import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/skeleton';
import styles from './styles.module.scss';
import { Comment } from '../../model/types';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.commentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" className={styles.avatar} />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} className={styles.text} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar && (
          <Avatar
            size={30}
            avatarUrl={comment.user.avatar}
            className={styles.avatar}
          />
        )}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} className={styles.text} />
    </div>
  );
});
